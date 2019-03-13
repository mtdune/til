# Docker

## docker-compose による WordPress 基本構成

[Docker 公式ドキュメント](http://docs.docker.jp/compose/wordpress.html) を参考にする。

- yaml ファイルのあるディレクトリに移動して `docker-compose up -d` で起動する
- 確認 URL
  - <http://localhost:8000>
- 終了時は `docker-compose down -v`

```yaml
version: "2"
services:
  db:
    image: mysql:5.7
    container_name: db
    volumes:
      - "./.data/db:/var/lib/mysql"
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    container_name: wp
    links:
      - db
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_PASSWORD: wordpress
```

この yaml ファイルで State が Restarting のまま Up しそうにない場合、既存のコンテナやイメージを参照している可能性があるので、それらを一度削除したほうがよいです。

- コンテナの確認
  - `docker container ls -a`
- ネットワークの確認
  - `docker network ls`
- 起動していないコンテナの一括削除
  - `docker container prune`
- イメージの削除
  - `docker images`
  - `docker rmi IMAGE-NAME`

参考

- <https://qiita.com/mom0tomo/items/7e611ac829863d4c5c82>

## WordMove インストールまでの手順

インストール前に `dpkg -l [package]` でパッケージがインストール済みか確認する。

- ruby 2.4.x インストール
- rbenv インストール
- wp-cli インストール
- WordMove インストール
- ホストとのディレクトリ共有
  - これは run する際に yaml ファイルで選択できるようにする

## WordMove 構成

## Docker 以外の選択肢

Docker だけでなく `systemd-nspawn` という選択肢もある。

- <https://anond.hatelabo.jp/20170309040708>
- <https://anond.hatelabo.jp/20170422000230>
