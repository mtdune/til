# Development

## 主な役割

- 数 MB の複数の画像と文字列の POST を受け付け、保存する機能
- 保存されたデータをもとに PDF ファイルを生成、保存する機能
- PDF ファイルが保存されたら、その URL を電子メールで通知する機能
- PDF ダウンロード認証画面
- 顧客ダウンロード用の URL と検証用ファイル保存の URL はわけたい
- 顧客ダウンロード用の URL は顧客が閲覧するか n 時間経過すると削除する

## その他の役割

- 全国 300 ヶ所の店舗データの JSON API
- 6000 から 8000 の自動車評価データの JSON API
- ランディングページ

## 要件

- サーバに保存されたデータの暗号化？
- ローカル開発環境（オフライン）
- 開発系
- git commit でのデプロイ
- 自動 DB バックアップ
- sendgrid のようなメール送信サービス

## その他の要件

- HTTPS 対応
- 独自ドメイン対応
- テンプレートエンジン

## 準備

- Google Analytics 設置
- heroku アカウント
- AWS アカウント開設
  - 複数の画像を heroku の PostgreSQL に入れるならば S3 は不要
  - DB 容量は割高のため S3 においたほうがよい
- github の private リポジトリ開設

## 手順

- ローカルに laravel 環境を作る
- URL ルーティングのテスト
- 画像アップロード機能のテスト
- private リポジトリに commit/push する
- heroku に反映する
- heroku の永続化テスト

## ログ 2020-03-04

- ローカルに git リポジトリをつくる
- `brew -v`
- Composer インストール
- Laravel インストーラのダウンロード
- `vi ~/.bash_profile`
- `export PATH=$PATH:/Users/developer/.composer/vendor/bin` を追記して保存する
- `source ~/.bash_profile`
- `laravel -v` で laravel コマンドを使用できるようになっていれば OK

laravel インストーラで Problem が多発している。ひとつひとつ潰していく。

- `brew install php@7.2`
- `npm -v`
- `npm install -g npm`
- `npm install --global switch-php`
- `switch-php 7.2`
- `brew list`
  - brew install されたパッケージの確認
- `brew install` か `switch-php 7.2` かどちらの場合も PHP のバージョンが変わらない場合は `exit` で一度ターミナルを閉じて、再度開く

再度インストール

- `rm -rf ./sandbox`
- `laravel new --force ./sandbox/`
- 特に Problem はない様子
- `php artisan serve`
- <http://127.0.0.1:8000>
- ctrl + c で停止
  - ctrl + c する前にターミナルを閉じた場合は `ps` でプロセスを探して kill する

次回の予定

- rm -rf したので、再度 git init して commit する
- github に private リポジトリをつくる
- heroku の場合 PostgreSQL のほうが低料金のため MySQL から PostgreSQL に変更する
- なにかチュートリアルを試す
- docker と heroku の利用を調べる
