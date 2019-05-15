# Handlebars

軽量 JavaScript テンプレートライブラリ。気軽に導入でき view を JavaScript のコードから切り離せるところがよい。

- https://qiita.com/saoshi/items/54081b598a6f0c8ce5bf
- https://qiita.com/sassy_watson/items/f9947624876bf75a9eff
- https://handlebarsjs.com/
- https://github.com/wycats/handlebars.js

```HTML
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js" charset="utf-8"></script>
```

外部ファイル化した Handlebars テンプレートの例

```JavaScript
<ul class="list">
  {{#each this}}
  <li class="item">
    <a href="#{{ url }}">{{ title }}</a>
  </li>
  {{/each}}
</ul>
```

```JavaScript
<ul class="nav">
    <li class="nav__previous">
        {{#if previous_url}}
            <a href="#{{ previous_url }}">前へ</a>
        {{/if}}
    </li>
    <li class="nav__next">
        {{#if next_url}}
            <a href="#{{ next_url }}">次へ</a>
        {{/if}}
    </li>
</ul>
```

Handlebars テンプレートファイルの取得と要素への追記

```JavaScript
let request = new XMLHttpRequest();

// handlebars テンプレートを指定する
request.open("GET", 'foo.handlebars.html', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // 非同期で取得した handlebars テンプレートを compile する
        let template_list = Handlebars.compile(request.responseText);
        // compile されたオブジェクトに引数を渡して HTML を生成する
        let html_list = template_list(DATA);
        // 生成された HTML を追加先の要素 ID を取得する
        let element_list = document.getElementById("list");
        // 生成された HTML を要素に追加する
        element_list.insertAdjacentHTML("beforeend", html_list);
    }
};

// request.overrideMimeType("text/html; charset=EUC-JP");
request.setRequestHeader("Pragma", "no-cache");
request.setRequestHeader("Cache-Control", "no-cache");
request.setRequestHeader(
    "If-Modified-Since",
    "Thu, 01 Jun 1970 00:00:00 GMT"
);
request.send();
```

Handlebars テンプレート取得の jQuery 版

```JavaScript
Handlebars.getTemplate = function(name) {
  if (
    Handlebars.templates === undefined ||
    Handlebars.templates[name] === undefined
  ) {
    $.ajax({
      //  beforeSend: function(xhr) {
      //    xhr.overrideMimeType("text/html;charset=EUC-JP");
      //  },
      type: "GET",
      url: name,
      success: function(data) {
        if (Handlebars.templates === undefined) {
          Handlebars.templates = {};
        }
        Handlebars.templates[name] = Handlebars.compile(data);
      },
      async: false
    });
  }

  return Handlebars.templates[name];
};
```
