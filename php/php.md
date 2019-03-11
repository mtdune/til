# HTTP GET/HTTP POST の取得

`$_GET['q']` を取得する場合

```php
(string)filter_input(INPUT_GET, 'q', FILTER_SANITIZE_SPECIAL_CHARS);
```
