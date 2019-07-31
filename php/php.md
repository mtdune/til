# PHP

## HTTP GET/HTTP POST の取得

`$_GET['q']` を取得する場合

```php
(string)filter_input(INPUT_GET, 'q', FILTER_SANITIZE_SPECIAL_CHARS);
```

## Undefined variable を回避する方法

- <https://qiita.com/mpyw/items/51bf42fe1ad8a7e535aa>
- <https://qiita.com/mpyw/items/2f9955db1c02eeef43ea>

## パスワード管理

- <https://www.websec-room.com/2019/02/10/3090>

## 静的解析

- <https://qiita.com/segawa/items/57ad70eef922a9cd4978>

## WEB+DB PRESS vol.106 2018

P.116

- === を使う
- assertEquals ではなく assertSame を使う
- in_array() の第三引数 true を設定する
- empty が広範囲に true を返すため、他の書き方ができないか考える
- @ でエラーを潰さない
- 引数の型を指定する
- global 宣言を使う必要はない
- スーパーグローバル変数を直接触れない
- and or ではなく && || を使う（優先度が異なるため意図しない動作になることがあるため）
- 三項演算子の入れ子を避ける
- コードフォーマッタを使う

## PHP テスト駆動開発

- <https://qiita.com/zurazurataicho/items/e40fd4a95a6dbba8e9e4>
- <https://qiita.com/sola-msr/items/5e5131d1a0f80b6f1303>

## root ユーザとして実行するスクリプト

```php
<?php
$messages_path = '/var/log/messages';
exec(sprintf("sudo -u root tail %s", $messages_path), $output);
foreach ($output as $str) {
  echo $str . "\n";
}
```

```bash
apache  ALL=(ALL) NOPASSWD: ALL
```

```bash
sudo -u root hoge
```
