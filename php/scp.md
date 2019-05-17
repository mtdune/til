# SCP

PHP で外部サーバのファイルを（ウェブサーバを介さず）直接取得する場合 SCP コマンドを使用するとよい。この場合、以下の方法がある。

1. visudo で apache ユーザに sudo コマンドを許可する
1. visudo で apache ユーザに /usr/bin/scp コマンドのみを許可する
1. apache ユーザの鍵認証を設定する

## apache ユーザの鍵認証設定

1. sudo cat /etc/passwd で apache ユーザのホームディレクトリを確認する
1. apache ユーザのホーム以下に鍵ファイルをおく。例 /var/www/.ssh/id_rsa
1. known_hosts に公開鍵を追記する。例 /var/www/.ssh/known_hosts
