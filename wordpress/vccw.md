# VCCW

- <https://ygkb.jp/3455/>
- <https://ygkb.jp/3544/>

## push 除外ファイル

- wp-config.php
- その他、手動編集ファイル

## VCCW 構築 2017

2019 年現在すでに VCCW のサポートは終了していますが、以前の手順書がありましたので、こちらに写しておきます。

### 基本

- <http://vccw.cc/>
- <https://ygkb.jp/3455/>

### 複数の環境の場合

- <https://ygkb.jp/3544/>
- <http://qiita.com/DesignChips/items/a8d059c71b16f00553bb>

### 基本的な手順

hosts ファイルの編集

> C:\Windows\System32\drivers\etc\hosts

```bash
192.168.33.10 vccw.dev # for WordPress
```

作業ディレクトリ作成

```bash
D:\vm\vccw>
```

box ファイルの追加操作

```bash
D:\vm\vccw>vagrant box add vccw-team/xenial64
```

vagrant 起動

```bash
D:\vm\vccw>vagrant up
```

VCCW による WordPress 管理画面

- <http://vccw.dev/wp-admin/>
- VCCW の WordPress 管理画面 ID/PASS は admin/admin

VM の停止

```bash
vagrant halt
```

SSH 接続

```bash
vagrant ssh
```

### その他

VCCW の wpcs コマンドによる WordPress コーディングスタンダードの検証

- <http://qiita.com/miya0001/items/6f9063099080b0497c6e>

WordPress のコーディングスタンダード

- <https://codex.wordpress.org/WordPress_Coding_Standards>

WP-CLI で WordPress を日本語パッケージと同じ構成にする

- <http://qiita.com/miya0001/items/96a684e2f819f9d8b4a4>

## Wordmove

### SSH

Wordmove の設定の前に、まず vagrant の VM からデプロイ対象サーバに SSH 接続できる状態にする。

```bash
ssh username@***.***.***.***
```

- vagrant で作成して下記に追記する
- /home/username/.ssh/authorized_keys

### Wordmove の設定

Wordmove の正しい設定方法

- <http://qiita.com/miya0001/items/9217140161216bbefc19>
- <https://github.com/welaika/wordmove>

除外ファイル

- .htaccess や wp-config.php のように本番、開発系それぞれの環境で異なるファイルは除外する

VM の公開ディレクトリ

- /var/www/html/

Vagrantfile ファイルのあるディレクトリ

- /vagrant

### pull のテスト

まず /vagrant に移動する。最初に pull を完全な状態にする

```bash
wordmove pull -t
```

データベース取得

```bash
wordmove pull -d
```

ファイルとデータベース取得

```bash
wordmove pull --all
```

Multiple environments explained

- <https://github.com/welaika/wordmove/wiki/Multiple-environments-explained>

```bash
wordmove pull -e ENVIRONMENT_NAME --all
```

例

```bash
wordmove pull -e production --all
```

### push のテスト

まず、物理ファイルのバックアップ

```bash
sudo tar czvf /home/username/backup.tar.gz /home/username/public_html/hoge
cp -a ./hoge ./hoge_old
du -s ./hoge/
du -s ./hoge_old/
diff -r ./hoge/ ./hoge_old/>
```

DB ダンプ

```bash
mysqldump -u root -p database_name > ./database_name.sql
```

Wordmove は pull/push 時の DB バックアップを自動的に保存するとのこと。

- <http://qiita.com/miya0001/items/9217140161216bbefc19>

例

```bash
wordmove push -e staging --all
```

push 後、ディレクトリとファイルのパーミッションを統一する

```bash
sudo chown -R apache:apache /home/username/public_html/hoge
sudo find /home/username/public_html/hoge/ -type f -exec chmod 664 {} \;
sudo find /home/username/public_html/hoge/ -type d -exec chmod 775 {} \;
```

## VCCW での DB dump ファイルの検証

まず、下記を一読する。

- <http://qiita.com/bobu_web/items/cbaefc9f167aed039441>

dump ファイルを import する。

```bash
$ mysql -uroot wordpress < hoge.sql
$ wp db reset
Are you sure you want to reset the 'wordpress' database? [y/n] y
Success: Database reset.
$ wp db import hoge.sql
Success: Imported from 'hoge.sql'.
$ wp search-replace --recurse-objects http://public.url http://local.url
```
