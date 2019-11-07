# QR コード表示スクリプト

QR コードに変換したい URL をブラウザで表示する。下記のブックマークレットを実行する。

```JavaScript
javascript:var url = encodeURIComponent(location.href);window.open('https://www.example.com/qrcode/index.php?url='+url).document;
```

投げられた URL を `$_GET` で取得して echo で出力する。

```JavaScript
$(document).ready(function(){$('#js-qrcode-target').qrcode("<?php echo $url; ?>");});
```

- あらかじめ jQuery と jquery.qrcode.min.js をロードする
- URL の # 記号（ハッシュ記号）を %23 に変換する
