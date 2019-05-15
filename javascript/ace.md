# ACE: Ajax.org Cloud9 Editor

管理画面で、簡易 HTML エディタを使用する場合に有用。

- https://github.com/ajaxorg/ace
- https://qiita.com/tags/ace

注意事項

- なぜか HTML ファイルの先頭に DOCTYPE があると、正しく動作しない。解決方法が見つからなかったため DOCTYPE をコメントアウトして使用します。（例えば DOCTYPE を含む HTML 全体ではなく、部分的なテキストならば、この問題は起きないかもしれない）
- body 要素を overflow:hidden; して、ブラウザのウィンドウのスクロールバーを消したほうが UX が高まる。この場合、フォームのボタン等は position:absolute; や fixed 等で、浮かせたほうがよい
- 使用するのは下記にある src-min 版
  - https://github.com/ajaxorg/ace-builds

```HTML
<!-- load emmet code and snippets compiled for browser -->
<script src="https://cloud9ide.github.io/emmet-core/emmet.js"></script>
<!-- load ace -->
<script src="./ace/ace.js"></script>
<!-- load ace emmet extension -->
<script src="./ace/ext-emmet.js"></script>
```

```JavaScript
document.addEventListener("DOMContentLoaded", function() {
  var editor = ace.edit("editor");
  editor.session.setMode("ace/mode/html");

  // enable emmet on the current editor
  editor.setOption("enableEmmet", true);

  if (typeof ace == "undefined" && typeof require == "undefined") {
    document.body.innerHTML =
      "<p class=''>couldn't find ace.js file, <br>" +
      "to build it run <code>node Makefile.dryice.js full<code>";
  } else if (typeof ace == "undefined" && typeof require != "undefined") {
    require(["ace/ace"], setValue);
  } else {
    require = ace.require;
    var el = document.getElementById("editor");
    var code = document.getElementById("textarea-code");

    el.env.editor.setValue(code.value, 1);
  }

  // 保存ボタンにイベントをセットする
  // 保存ボタンを押下すると #editor 要素の内容を取得して
  // フォーム内の textarea#code にいれた後に submit する
  var btn = document.getElementById("btn-submit");
  btn.addEventListener("click", function() {
    code.textContent = el.env.editor.getValue();
    document.jsform.submit();
  });
});
```
