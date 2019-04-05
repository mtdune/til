# Docker

## 基本

- <https://ottan.xyz/docker-for-mac-wordpress-4711/>
- <https://ottan.xyz/docker-for-mac-wordpress-customize-4714/>

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

この yaml ファイルで State が Restarting のまま Up しそうにない場合、既存のコンテナやイメージを参照している可能性があるので、それらを一度削除します。

コンテナの確認

```bash
docker container ls -a
```

ネットワークの確認

```bash
docker network ls
```

起動していないコンテナの一括削除

```bash
docker container prune
```

イメージの削除

```bash
docker images
docker rmi IMAGE-NAME
```

すべての未使用コンテナの削除

```bash
docker system prune
```

すべての未使用イメージの削除

```bash
docker system prune -a
```

参考

- <https://qiita.com/mom0tomo/items/7e611ac829863d4c5c82>

## WordMove インストールまでの手順

インストール前に `dpkg -l [package]` でパッケージがインストール済みか確認する。

- rbenv インストール
- ruby 2.4.x と gem のインストール
- WordMove インストール
- wp-cli インストール
- ホストとのディレクトリ共有
  - これは run する際に yaml ファイルで選択できるようにする

## WordMove 構成

Windows コマンドプロンプトからコンテナに SSH 接続する。

```bash
docker exec -it wordpress /bin/bash
```

ローカルの確認画面 URL

- <http://localhost:8080>

```bash
docker stop CONTAINER_NAME # コンテナの停止
docker rm CONTAINER_NAME # コンテナの削除
```

```bash
docker run --name db -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
docker run --name wordpress --link db:mysql -p 8080:80 -d wordpress
```

- <http://chamao.hatenablog.com/entry/2017/10/11/142510>

上記を参考に Ruby をインストールする。

```bash
apt-get update # 以下 sudo 不要
apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev
apt-get install git
cd ~
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
rbenv -v # rbenv 1.1.2
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
rbenv install -l
rbenv install 2.4.2 # 数分かかる
rbenv rehash
rbenv global 2.4.2
ruby -v # ruby 2.4.2
gem -v # gem 2.6.13
```

次に wordmove をインストールする。

```bash
gem install wordmove
wordmove --version # 4.0.0
```

次に wordmove が使用する wp-cli をインストールする。（公式サイトの記述そのままで問題ない）

- <https://wp-cli.org/ja/>

```bash
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
php wp-cli.phar --info
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/
wp --info
```

次に wordmove が使用する sshpass をインストールする。

```bash
rsync --version # 3.1.2
dpkg -l sshpass
apt-get install sshpass
apt-get install net-tools # netstat コマンド
```

秘密鍵をコピーして SSH 接続できるか確認する

- ローカルとコンテナでディレクトリ共有する

下記の操作でインストール済みのパッケージを確認できる。

```bash
dpkg -l FOOBAR
```

## Docker 以外の選択肢

Docker だけでなく `systemd-nspawn` という選択肢もある。

- <https://anond.hatelabo.jp/20170309040708>
- <https://anond.hatelabo.jp/20170422000230>
