# WordPress

## 確認事項

- SSL
- 静的化
- プラグインは基本的に使用しない
- DB バックアップの方法（メール転送付きのバックアップ用のプラグインか cron で dump するか）
- デプロイ方法

## DISALLOWED PLUGINS

WPEngine による許可できない WordPress プラグイン一覧表

- <https://wpengine.com/support/disallowed-plugins/>

## 静的化

Shifter

- <https://tech.speee.jp/entry/2018/12/13/180000>

やはり静的出力して CDN におく方式が一般的になりそう。

下記は golang による業務用静的化プラグインの例。

- <https://blog.feedtailor.jp/2018/02/20/esparwpplugin/>

一般的な静的化プラグイン

- <https://its-office.jp/blog/wordpress/2018/03/04/wp-static.html>

## VCCW

VCCW 起動

```bash
cd ./vm/vccw
vagrant up
```

VCCW 終了

```bash
vagrant halt
```

リンク

- <https://qiita.com/h6akh/items/0197194b68c5852c7ab0>
- <https://qiita.com/mapyo/items/58be41707b909cb71e8f>

## デバッグ

強制的に画面出力する場合はスーパーグローバル変数に直接代入する。

```php
<?php

define('WP_USE_THEMES', true);

$_GET['p'] = 5702;
$_SERVER['SERVER_PROTOCOL'] = 'HTTP/1.1';
$_SERVER['REQUEST_METHOD'] = 'GET';
$_SERVER['REQUEST_URI'] = '/?p=5702';
$_SERVER['HTTP_HOST'] = 'www.example.com';

require_once('wp-load.php');
wp();
require_once( ABSPATH . WPINC . '/template-loader.php');
```

## 作業前後の処理

WordMove での push や WordPress 上での作業を遮らないようにするため、作業アカウントではなく apache ユーザに統一する。

```bash
sudo chown -R apache:apache /home/user_name/public_html/blog_name
sudo find /home/user_name/public_html/blog_name/ -type f -exec chmod 664 {} \;
sudo find /home/user_name/public_html/blog_name/ -type d -exec chmod 775 {} \;
```

## プラグイン開発

- [サイトの拡張性を飛躍的に高める WordPressプラグイン開発のバイブル](https://www.amazon.co.jp/dp/4797373520/)
  - VCCW 開発者による著書

## テーマ開発

2019 年は underscores 以外の基礎となるテンプレートを調べる。

- [Theme Check](https://ja.wordpress.org/plugins/theme-check/)
