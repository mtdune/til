# Google Spreadsheet

## URL リストと title 取得

- URL リスト一覧表を作成する
- URL の右側のセルに、下記を入力する

```JavaScript
= IMPORTXML(A1, "//title")
```

## リンク抽出

- A1 セルに URL を書く
- B1 セル

```JavaScript
= IMPORTXML(A1, "//a/@href")
```

- C1 セル

```JavaScript
= IMPORTXML(A1, "//a")
```
