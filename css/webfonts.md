# Web Fonts

## 要点

- 通常、明朝体は font-weight プロパティを指定しても細くみえる
- インストールされていない書体を表示するには web fonts か SVG 埋め込みか png 画像かいずれか
- 手軽に web fonts を試す場合は Google Fonts がよい
- 例えば、豪のような Google Fonts にない文字を使用する場合は TTF ファイルから WOFF ファイルを作成する必要がある

## サブセット化の手順

- sawarabi-mincho-20201215.zip をダウンロードする
  - <https://osdn.net/projects/sawarabi-fonts/releases/74082>
  - TTF ファイルと OTF ファイルがあるが Windows の場合は TTF ファイルを使用する
  - macOS の場合は OTF を使用する（未確認）
- 以降、下記を参考に、サブセット化と WOFF 化すれば OK
  - <https://www.torat.jp/subset-web-fonts/>

## その他

web fonts をそのまま使用しても、例えば、数字や四則演算記号のような意図によって、全角半角混在する場合は、下記を調整する。

- letter-spacing プロパティで字間を調整する
- scale プロパティで左右に拡大する
