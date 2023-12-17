# panda-tools

バーチャル学会2023 で、こちらのポスターセッションで、

> p72-D4：「clusterワールドたちはどう伸びるか」観察結果
> https://sites.google.com/view/virtualconference2023/schedule/2nd-day/2nd-day-poster/D?authuser=0#h.i2lsrbob9w5i

「ワールド作者としては、訪問者の滞在時間とか動きのデータが知りたいよね」 

という話題が出たので、データの収集と可視化の仕組みを作ってみました。


ワールドに仕込むギミックについては、別途、共同研究グループのメンバー限定で UnityPackage を配布しています。
研究グループに参加を希望されるワールドクリエイター様は [けぱんだ](https://twitter.com/kepa4696) までご連絡ください。

## 例 ##
ぱんだーらんど https://cluster.mu/w/a47b8bd6-cf0d-4cec-ac75-1fa940280a0d の2日分のデータを可視化した例です。

### ワールドに設定した格子状の trigger コライダー ###
![example-unity.png](resources/example-unity.png)

画面右側のインスペクターに見えている Panda Tools (Script) コンポーネントを設置し、全ての項目を設定してボタンを押すと、必要なギミックが全て設定される仕組みになっています。

### 各グリッドの衝突判定回数をヒートマップで可視化 ###
![example-fig.png](resources/example-fig.png)

（旋回表示した動画は [こちら](resources/example-movie.mp4) です。）

### 滞在時間の傾向を可視化 ###
![example-timing.png](resources/example-timing.png)

横軸（タイミング）は、各訪問者の入室からの経過秒数を、指数関数的に増加する間隔で計測点としたものです。
この図から以下のことなどが読み取れます。

- 計測期間中にワールドに訪問したのは8人で、全員が入室から112.2秒まではワールド内に滞在していた。
- 次の計測タイミング（入室から251.2秒）までのあいだに3人がワールドから離脱した。
- 入室から1258.9秒まで滞在していたのは8人中1人だった。
- その次の計測タイミング（図には無いが、入室から2818.4秒）まで滞在したケースは無かった。
