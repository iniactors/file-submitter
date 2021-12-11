# file-submitter
GASとGoogle Formsを用いた一般非公開Google Driveへのファイル提出の自動化プログラム

## Motivation
2021年のINIAD-FESでは、COVID-19への対策として対面活動日の10日前からの検温をスプレッドシートに記入し、事務課・学祭実行委員会と共有する必要があった。  
それにあたり、以下の2つの課題を解決し、効率化を図るため本プログラムを開発した。
- スプレッドシートを共有するGoogle Driveフォルダには代表しかアクセス不可のため、シートを回収しアップロードするのが大変
- バイタルデータというセンシティブなデータを扱うため、Slackの代表宛DMで受け取り、それを手元の環境にダウンロードしてアップロードするというのは適さない

## How to use
事務課・学祭実行委員会との共有フォルダを以下「共有フォルダ」と呼ぶ。
1. 以下のようなGoogle Formsを共有フォルダにアクセス可能な人間（主に代表）が作成する
    <img src="https://user-images.githubusercontent.com/49315610/145681438-fb8284f0-7a22-49ee-8d47-5ab3a0725990.jpeg" width="600px" />  

2. 共有フォルダに日付の選択肢と同じ値の名前でフォルダを日付の数だけ作成する  
例えば上の画像の場合、`10/7(木)`のようなフォーマット。  
3. Google Formsのスクリプトエディタ（GAS）に本リポジトリの[main.js](main.js)を貼り付ける
4. main.js内の以下のコードを書き換える  
    ```js
    const folderid = '[OUTPUT_FOLDER]';
    ```
    この`[OUTPUT_FOLDER]`の値を共有フォルダのフォルダIDに書き換える。  
      
    **フォルダIDの確認方法**  
      Google DriveのフォルダのURLの以下の部分がフォルダID  
      `https://drive.google.com/drive/u/1/folders/{フォルダID}`
5. スクリプト（GAS）のトリガーを設定する  
    以下の画像のように実行する関数、イベントのソース・種類を設定する。  
    <img src="https://user-images.githubusercontent.com/49315610/145682420-20e72a21-ecce-4e3c-822a-aaf4d080cc71.png" width="600px" />
6. 完了！

## License
Apache License 2.0
