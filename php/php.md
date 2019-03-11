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