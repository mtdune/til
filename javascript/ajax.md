# Ajax

## ライブラリ比較表

- https://www.javascriptstuff.com/ajax-libraries/

## window.fetch polyfill

よく目にするのは axios だが IE10 対応の場合は window.fetch polyfill がよさそう。

- https://github.com/github/fetch
- Promise 対応
- IE10, Safari 対応
- fetch の polyfill はたくさん種類があるが、対応ブラウザや保守の有無でこちらがよさそう

## polyfill.io

- https://polyfill.io/
- IE8+
- Promise や fetch がある（未検証）

## superagent

- <https://github.com/visionmedia/superagent>
- Promise 非対応
- Supported Platforms によると IE9+
