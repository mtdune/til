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
- インストーラではなく Laravel 本体のバージョンは `php artisan -V` で確認する

次回の予定

- rm -rf したので、再度 git init して commit する
- github に private リポジトリをつくる
- heroku の場合 PostgreSQL のほうが低料金のため MySQL から PostgreSQL に変更する
- なにかチュートリアルを試す
- docker と heroku の利用を調べる

## ログ 2020-03-05

まず git init する。

- `git init`
- `git config --local --list`
- `git add -A`
- `git commit -m "First commit"`

Laradock を使うほうがよいらしいので、再度やり直す。

- <https://laradock.io/>

Docker for Mac をインストールする

- <https://hub.docker.com/editions/community/docker-ce-desktop-mac/>
- 一度 Docker for Mac アプリを起動する
- Docker for Mac はマウントが遅いため :cashed 指定してマウントする
  - <https://www.to-mega-therion.net/docker/docker-mounted-volume-slow>
  - マウントするタイミングがよくわからない
  - Laradock に `APP_CODE_CONTAINER_FLAG=:cached` というデフォルト設定がある
- `Bind for 0.0.0.0:8080 failed: port is already allocated` と表示され phpmyadmin コンテナの起動に失敗する
- `docker ps` 起動しているコンテナを確認
- `docker stop $(docker ps -q)` すべてのコンテナを終了する
- `docker rm $(docker ps -q -a)` すべての停止しているコンテナを削除する
- `docker images` 存在するイメージの一覧表
- `docker rmi <IMAGE ID>` イメージ削除
  - コンテナやイメージの一括操作
  - <https://qiita.com/shisama/items/48e2eaf1dc356568b0d7>
- `Bind for 0.0.0.0:8080 failed: port is already allocated` の件は `.env` ファイルの `PMA_PORT=8080` を `PMA_PORT=8081` に変更したら起動した
  - `docker-compose.yml` を直接編集しないほうがよい
- `docker-compose exec workspace bash`
- `composer create-project --prefer-dist laravel/laravel ./`
- `cd ../src/`
- `vi .env` 下記を変更する

```Bash
DB_HOST=mysql
DB_DATABASE=default
DB_USERNAME=default
DB_PASSWORD=secret
```

- `cd ../laradock` して一度止める `docker-compose stop`
- `docker-compose up -d nginx mysql phpmyadmin` 再起動
- ブラウザに `localhost` で Laravel の起動を確認できる
- `.env` で指定した `http://localhost:8081/` で phpMyAdmin を表示できる

MySQL のコンテナがすぐに落ちる問題。

- `Exited (2) 4 minutes ago`
- `docker ps -a`
- `docker rm <CONTAINER ID>`
- `docker images`
- `docker rmi <IMAGE ID>`
- `docker volume ls`
- `docker volume rm <VOLUME NAME>`

すべてのイメージ削除

- `docker rmi $(docker images -q)`
- コンテナ、イメージをすべて消して再度 up してみたが mysql がすぐに落ちる

## ログ 2020-03-06

MySQL のバージョンが 8.0 の場合はすぐに落ちるとのこと。

- <https://qiita.com/don-bu-rakko/items/cd8f96cc9087abf601e3>
- `.env` ファイルを 5.7 に修正しても `rm -rf ~/.laradock/data/mysql` しないと、キャッシュを読み込んでしまうので 5.7 にならない！
- 何回か `docker ps -a` しても MySQL は Exit していないことがわかる
