# Bookmarklet for bookmark

- 個人用 TODO リストに POST するスクリプト
- f.action には POST する URL を入力する

```javascript
javascript:(function(o){var w = window, d = document, f = d.createElement('form'), e, i;o = {};o['inputURL'] = location.href;(location == 'about:blank' ? w:open() || w).document.body.appendChild(f);f.action = 'URL';f.method = 'POST';for(i in o){e = d.createElement('input');e.name = i;e.value = o[i];e.type = 'hidden';f.appendChild(e);}f.submit();})();
```
