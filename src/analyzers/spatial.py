import datetime
import io
import os
import sys
import time

import cv2
import matplotlib.colors as colors
import matplotlib.figure as fgr
import matplotlib.pyplot as plt
import mpl_toolkits.mplot3d.axes3d as ax3d
import numpy as np
import requests

output_dir = os.path.abspath(os.path.dirname(__file__) + '/../../output')
output_size = (800, 600)
output_dpi = 75
query_endpoint = 'https://0ivhbivo92.execute-api.ap-northeast-1.amazonaws.com/query'


def get_data(wid: str) -> (list, int, int):
    url = "{}?wid={}".format(query_endpoint, wid)
    r = requests.get(url)
    data = r.json()
    return data['Items'], data['Count'], data['ScannedCount']


def get_analyzed_data(wid: str) -> (list, float, float, int, int):
    url = "{}?analyze=individualSensorCounts&wid={}".format(query_endpoint, wid)
    r = requests.get(url)
    data = r.json()
    return (data['Summary'],
            data['MaxTimeEpoch'],
            data['minTimeEpoch'],
            data['Count'],
            data['ScannedCount']
            )


def timestamp_range_of(items: list):
    max_timestamp = 0
    min_timestamp = time.time()
    for item in items:
        if 'Sensor' in item and 'TimeEpoch' in item:
            time_epoch: str = item['TimeEpoch']
            epoch = int(time_epoch)
            epoch = (epoch / 1000) if epoch > time.time() else epoch
            max_timestamp = max(max_timestamp, epoch)
            min_timestamp = min(min_timestamp, epoch)
    return datetime.datetime.fromtimestamp(min_timestamp), datetime.datetime.fromtimestamp(max_timestamp)


def sensor_shape_of(items: list) -> (int, int, int):
    mx = my = mz = 0
    for item in items:
        if 'Sensor' in item:
            sensor: str = item['Sensor']
            [x, y, z] = sensor.split('_')
            mx = max(mx, int(x))
            my = max(my, int(y))
            mz = max(mz, int(z))
    return mx + 1, my + 1, mz + 1


def sensor_data_of(items: list):
    data = np.zeros(sensor_shape_of(items), dtype=np.int32)
    for item in items:
        if 'Sensor' in item:
            sensor: str = item['Sensor']
            [x, y, z] = sensor.split('_')
            data[int(x), int(y), int(z)] += 1
    return data


def timing_data_of(items: list):
    data = {}
    for item in items:
        if 'Timing' in item:
            timing = item['Timing']
            if timing in data:
                data[timing] += 1
            else:
                data[timing] = 1
    timings = []
    counts = []
    for key, value in data.items():
        timings.append(float(key))
        counts.append(value)
    return timings, counts


def create_plots(wid: str):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    [real_wid, pass_phrase] = wid.split('_')

    (items, count, scanned_count) = get_data(wid)
    print('count: {}, scanned: {}'.format(count, scanned_count))

    (datetime_min, datetime_max) = timestamp_range_of(items)
    sensor_data = sensor_data_of(items)
    (timing_seconds, timing_counts) = timing_data_of(items)

    (size_w, size_h) = output_size
    fig_size = (size_w / output_dpi, size_h / output_dpi)

    # 滞在時間
    fig2: fgr.Figure = plt.figure(figsize=fig_size, dpi=output_dpi)
    ax2 = fig2.add_subplot(111)
    ax2.set_title('How long does visitors staying')
    ax2.set_xlabel('Timing (seconds)')
    ax2.set_ylabel('Count')
    ax2.bar(range(len(timing_seconds)), timing_counts, tick_label=timing_seconds)
    fig2.suptitle('World ID: {}'.format(real_wid))
    fig2.savefig(os.path.join(output_dir, 'timing.png'))

    # 三次元空間ヒートマップ
    x, y, z = np.meshgrid(range(sensor_data.shape[0]), range(sensor_data.shape[1]), range(sensor_data.shape[2]))
    fig: fgr.Figure = plt.figure(figsize=fig_size, dpi=output_dpi)
    ax: ax3d.Axes3D = fig.add_subplot(111, projection='3d', aspect='equal')
    sc = ax.scatter(x, y, z, c=sensor_data, alpha=0.3, cmap='jet')  # norm=colors.Normalize(vmin=0, vmax=16)
    fig.colorbar(sc)

    ax.set_title('Number of collision, {} - {}'.format(
        datetime_min.strftime('%Y/%m/%d %H:%M:%S'), datetime_max.strftime('%Y/%m/%d %H:%M:%S')))
    plt.suptitle('World ID: {}'.format(real_wid))
    plt.show()

    fig.savefig(os.path.join(output_dir, 'fig.png'))

    writer = cv2.VideoWriter('../../output/movie.mp4',
                             cv2.VideoWriter_fourcc('m', 'p', '4', 'v'),
                             5.0,
                             output_size)
    for angle in range(0, 360):
        if angle % 10 == 0:
            ax.view_init(elev=15, azim=angle + 30)
            buf = io.BytesIO()
            fig.savefig(buf, format='png', dpi=output_dpi)
            buf.seek(0)
            img_arr = np.frombuffer(buf.getvalue(), dtype=np.uint8)
            buf.close()
            img = cv2.imdecode(img_arr, 1)
            writer.write(img)
    writer.release()


if __name__ == "__main__":
    wid = sys.argv[1]
    create_plots(wid)
