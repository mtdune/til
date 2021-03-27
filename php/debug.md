# デバッグ

## 自動実行

- `entr` コマンドを使用できるならば使用する（別途 make install が必要）
- `entr` がない場合 `watch` コマンドで n 秒おきに実行する

## ログ監視

- `tail -f /var/log/php/error_log`
- `error_log()` 関数でログファイルを指定して `tail` コマンドで監視する

```PHP
error_log('foo'); // /var/log/ 以下の指定のログに出力する場合
error_log('foo', 3, './log/log.txt'); // 実行する PHP ファイル以下に出力する場合
```

- 上記の場合、基本的に前者の共通ログに出力するほうが楽
- SSH ユーザと PHP の実行ユーザが異なることが多いため、後者の場合、監視する SSH ユーザで `touch log.txt` して `chmod 777 log.txt` するか、作業後に PHP で `unlink('./log/log.txt')` して、ログ・ファイルを削除する必要がある

```BASH
tail -f log.txt | grep --line-buffered "FOOBAR"
```

## ログの設置

- 正常な経路よりも異常な経路に注目する
- if などの制御構文の分岐箇所
- ファイルの書き込みがある場合は、保存ディレクトリやファイルの有無、パーミッションにも注意する
- 一連の処理の開始と終了箇所に `---` を出力すると、わかりやすい
- 再現性が低く、人によって再現する場合は IP アドレスや BASIC 認証の名前 `$_SERVER['PHP_AUTH_USER']` を出力する
- `date(DATE_ATOM)` を使用するとよい
- ある程度、問題ない場合はログの出力を中止する

例

```PHP
date_default_timezone_set('Asia/Tokyo');
error_log(date(DATE_ATOM) .':'. {$value}, 3, './log.txt');
```
