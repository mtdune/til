# Diff ツール

管理ツールに diff ツールを組み込む場合にちょうどよい。

- <https://github.com/cemerick/jsdifflib>
- <http://cemerick.github.io/jsdifflib/demo.html>

基本的にはデモ画面のコードで普通に動く。

- 原文と修正した HTML は textarea で展開して readonly 属性をつけて display:none; しておけばよい

```HTML
<strong>Context size (optional):</strong>
<input type="text" id="contextSize" value="">
<div class="viewType">
    <input type="radio" name="_viewtype" id="sidebyside" class="js-diff-0">
    <label for="sidebyside">Side by Side Diff</label>
    &nbsp; &nbsp;
    <input type="radio" name="_viewtype" id="inline" class="js-diff-1">
    <label for="inline">Inline Diff</label>
</div>
<div id="diffoutput"></div>
```

```JavaScript
function diffUsingJS(viewType) {
  "use strict";

  var byId = function(id) {
      return document.getElementById(id);
    },
    base = difflib.stringAsLines(byId("base-html").value),
    newtxt = difflib.stringAsLines(byId("new-html").value),
    sm = new difflib.SequenceMatcher(base, newtxt),
    opcodes = sm.get_opcodes(),
    diffoutputdiv = byId("diffoutput"),
    contextSize = byId("contextSize").value;

  diffoutputdiv.innerHTML = "";
  contextSize = contextSize || null;
  diffoutputdiv.appendChild(
    diffview.buildView({
      baseTextLines: base,
      newTextLines: newtxt,
      opcodes: opcodes,
      baseTextName: "Base Text",
      newTextName: "New Text",
      contextSize: contextSize,
      viewType: viewType
    })
  );
}

document.addEventListener("DOMContentLoaded", function() {
  diffUsingJS(0);

  var js_diff_0 = document.querySelectorAll(".js-diff-0");
  js_diff_0[0].addEventListener("click", function(event) {
    diffUsingJS(0);
  });

  var js_diff_1 = document.querySelectorAll(".js-diff-1");
  js_diff_1[0].addEventListener("click", function(event) {
    diffUsingJS(1);
  });
});
```
