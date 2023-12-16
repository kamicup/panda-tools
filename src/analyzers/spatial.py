import datetime
import os
import sys
import time

import matplotlib.pyplot as plt
import numpy as np
import requests

output_dir = os.path.abspath(os.path.dirname(__file__) + '/../../output')


def get_data(wid: str):
    url = "https://0ivhbivo92.execute-api.ap-northeast-1.amazonaws.com/query?wid=" + wid
    r = requests.get(url)
    data = r.json()
    # print(data)
    return data['Items']


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
    a = []
    b = []
    for key, value in data.items():
        a.append(float(key))
        b.append(value)
    return a, b


def create_plots(wid: str):
    [real_wid, pass_phrase] = wid.split('_')

    items = get_data(wid)
    (datetime_min, datetime_max) = timestamp_range_of(items)
    sensor_data = sensor_data_of(items)

    # 滞在時間
    (a, b) = timing_data_of(items)
    print(a, b)
    fig2 = plt.figure()
    ax2 = fig2.add_subplot(plt.subplot(1,1,1))
    ax2.set_title('How long does visitors staying')
    ax2.set_xlabel('Timing (seconds)')
    ax2.set_ylabel('Count')
    ax2.bar(range(len(a)), b, tick_label=a)
    fig2.suptitle('World ID: {}'.format(real_wid))

    # 三次元空間ヒートマップ
    x, y, z = np.meshgrid(range(sensor_data.shape[0]), range(sensor_data.shape[1]), range(sensor_data.shape[2]))

    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d', aspect='equal')
    sc = ax.scatter(x, y, z, c=sensor_data, alpha=0.3, cmap='jet')
    fig.colorbar(sc)

    ax.set_title('Number of collision, {} - {}'.format(
        datetime_min.strftime('%Y/%m/%d %H:%M:%S'), datetime_max.strftime('%Y/%m/%d %H:%M:%S')))
    plt.suptitle('World ID: {}'.format(real_wid))
    plt.show()

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    for angle in range(0, 360):
        if angle % 10 == 0:
            ax.view_init(elev=15, azim=angle + 30)
            fig.savefig(os.path.join(output_dir, 'fig_{:03d}'.format(angle) + '.png'))


def create_movie():
    import glob, re
    import cv2

    filepath_list = glob.glob(os.path.join(output_dir, '*.png'))
    filepath_list = sorted(filepath_list, key=lambda x: int((re.search(r"[0-9]+", x)).group(0)))

    size = None
    img_list = []
    for file_path in filepath_list:
        img = cv2.imread(file_path)
        height, width, layers = img.shape
        size = (width, height)
        img_list.append(img)

    out = cv2.VideoWriter('../../output/movie.mp4',
                          cv2.VideoWriter_fourcc(*'MP4V'),
                          5.0,
                          size)

    for i in range(len(img_list)):
        out.write(img_list[i])
    out.release()


if __name__ == "__main__":
    wid = sys.argv[1]
    create_plots(wid)
    create_movie()
