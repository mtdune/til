# Laravel

## 公式ドキュメント

- <https://laravel.com/docs/8.x/sail>

## 懸念と解決

デプロイ

- ローカル開発と本番環境は基本的に異なるので気にしない
- デプロイで開発手法が変わることはないので、まずはローカル開発だけを考える
- 前回は rsync で同期していた
- Heroku あたりにおく予定

Rails か PHP か

- 慣れているほうでよい（どっちでもよい）

自作フレームワークか Laravel か

- T さんの要件として、既存フレームワークを使用してほしいとのことなので Laravel
- 前回は自作フレームワークだった

PHP か JS フレームワークか

- 必要に応じて使い分ける

Docker の使用

- 必須。使用しないという選択肢は存在しない

Windows PC か macOS か

- M1 Mac でも Docker for macOS が遅い問題
- 原因は Docker の土台となる仮想マシンや macOS のファイルシステムらしい

Linux ノート PC という選択肢

- Google Chrome, VSCode, Docker が動けばなんでもよいのではないか？
- Linux インストールするならば Dell XPS 13 のような Linux で利用されるノート PC にする
- ディストリビューションは？

## Docker

- Laravel の LAMP スタック系の docker イメージの有無
- なぜか verified publisher の Docker イメージが 404 Not Found になっていた
  - <https://hub.docker.com/r/bitnami/laravel>
  - 他に安全そうなイメージがなかったため Sail に到達！

## Laravel Sail

インストール

- Docker のインストールが必要
  - Docker for macOS は現行と直近二世代のみサポートなので機種に注意
  - 一度 Docker をインストールしておけば未対応 macOS でも update でどうにかなる
- 最初のディレクトリ作成に失敗する場合は .bash_profile の設定を変更する（野良イメージを使用する設定に変更する）
- sail up 後、終了する場合は、公式ドキュメントにあるとおり ctrl + c
  - <https://laravel.com/docs/8.x/sail>
  - -d オプション付きでバックグランド起動している場合は `sail stop` で止まる
  - 起動しているかどうかは `sail ps` で確認できる
- 一度 Laravel の画面が表示されたら `git init` してよい

よいところ

- テストフレームワークがデフォルトで用意されている
- node.js も一通り用意されている
- すぐに Docker + Laravel で開発できる

インストール関連リンク

- <https://reffect.co.jp/laravel/laravel-sail>

## config

config/app.php

- `fallback_locale` は変更しない
- `timezone` を `Asia/Tokyo` に変更する
- `locale` を `ja` に変更する
- `faker_local` を `ja_JP` に変更する

env() ではなく config() を使うとのこと

- <https://qiita.com/mitashun/items/96caaf1c1f36eada20f2>

## Heroku

- <https://qiita.com/ymbyuki0104/items/97534b0db0165d9e2649>

## データベース

sail 後 MySQL の日本語文字化け対策として `utf8mb4` に設定する。変更後 `sail up -d --bulild` で起動する。

- <https://www.youtube.com/watch?v=tYbVl6N8oxI&t=899s>

DB クライアント

- <https://tableplus.com/>

phpMyAdmin は docker-compose.yml の編集で利用できる

- <https://monmon.jp/483/>
- <https://zenn.dev/yamabiko/articles/laravel-sail-docker>
- <https://qiita.com/yuttana1223/items/54536cad0f7eeb3c0383>

## Vue.js

- <https://zenn.dev/yamabiko/articles/laravel-jetstream-vite>

## ユニットテスト

- <https://qiita.com/kai_kou/items/ba0b4843b2697cdc9004>

## デバッグ

Xdebug

- <https://zenn.dev/yamabiko/articles/laravel-sail-docker>

デバッグバーの導入

- <https://qiita.com/yuttana1223/items/54536cad0f7eeb3c0383>

まとめ

- <https://qiita.com/ucan-lab/items/29614d0f3ded1d3a94fb>

## Git

異なる PC で作業するとき git リポジトリを clone するので、ひとりプロジェクトでも注意が必要。

- <https://qiita.com/Gro/items/38103dda7aa5fb37eb64>
- <https://qiita.com/yuttana1223/items/54536cad0f7eeb3c0383>

## Breeze ユーザ認証機能

Breeze の導入と日本語化

- <https://qiita.com/kai_kou/items/12c060a8b5e6eb409da8>
- <https://qiita.com/gori1747/items/e31bc046e9d62d2b8020>

認証メール関連

- <https://qiita.com/gcchaan/items/048140a4106c5b92fae3>
- <https://qiita.com/kai_kou/items/66ffde0047b0a2af4390>

権限

- <https://qiita.com/benten/items/6490af2d9cb364dc2e20>
- <https://qiita.com/showgo_jp/items/49593428c91d427f72de>
- <https://qiita.com/nomuraxis/items/0791dfd3eea9c5ca4085>

## スクレイピング

Goutte

- <https://melloblo.com/laravel-scraping/>
- <https://www.youtube.com/watch?v=tYbVl6N8oxI>
  - sail 使用している

## VSCode Remote 開発

まず下記をインストールする。

- Visual Studio Code Remote - Containers
- Visual Studio Code Remote - SSH

ファイルの編集は二通りある。

- ローカルのファイルを直接編集する（反映されるか未確認）
  - まずこちらを試す
- docker のコンテナのファイルを編集する
  - 記事の公開日が最近であることと sail での使用のため、まずこの通り試して失敗した場合はそれについて調べる
  - <https://qiita.com/goemontech/items/63c8de2a122a4bdb7967>

## チュートリアル

なんでもよいが毎日少しずつ進める。動画系学習サイトなど探せばいくらでもある。

- <https://www.hypertextcandy.com/laravel-tutorial-introduction/>
