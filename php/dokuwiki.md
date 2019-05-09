# DokuWiki

拡張機能

- Indexmenu Plugin by Samuele Tognini
- Markdowku by Julian Fagir

テンプレート

- Bootstrap3 Template by Giuseppe Di Terlizzi

サイドバーの作成

- /doku.php?id=sidebar
- sidebar というページを作成する

```text
[[http://www.example.com/doku.php?do=recent|最近の変更]]

[[https://trello.com/|Trello]]

{{indexmenu>..|js navbar  noscroll notoc tsort nsort skipfile=/sidebar/ skipns=/^(wiki|playground)$/ }}
```

テンプレートの変更

- 管理 → サイト設定 → テンプレート → ページの最下部の保存ボタンを押下する

新規ページの作成

- ページ上部の検索フォームに hoge:fuga と入力して編集して、保存する
