# デバッグ

## 自動実行

- `entr` コマンドを使用できるならば使用する（別途 make install が必要）
- `entr` がない場合 `watch` コマンドで n 秒おきに実行する

## ログ監視

- `tail -f /var/log/php/error_log`
- `error_log()` 関数でログファイルを指定して `tail` コマンドで監視する
