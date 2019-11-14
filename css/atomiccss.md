# Atomic CSS

## Yahoo.com の事例

- <https://www.haikudeck.com/atomic-css-science-and-technology-presentation-dJ0xlFjhBQ>

## css-tricks.com の記事

- As Atomic CSS (also known as Functional CSS) has been gaining in "popularity"
- <https://css-tricks.com/lets-define-exactly-atomic-css/>

## 『最強の CSS 設計』の著者

- <https://twitter.com/seito_horiguchi/status/620620772403359744>

## 株式会社ピクセルグリッドの高津戸さん

- Atomic CSS は Object Oriented CSS の一種であることがわかる
- <https://html5experts.jp/shumpei-shiraishi/22820/>

> 白石: なるほど。以前から誰かに聞きたかったのですが、例えば「テキストを右寄せにする」ための「align-right」というクラス、もっというと「 8px のマージン」をつけるための「margin-8」みたいなクラスを作って組み合わせる、というのも OOCSS と言えるんでしょうか？ 正直、あまり好みではないのですが…。
> 高津戸: それが OOCSS かどうか、でいえば「そうだ」と言えるとは思います。

## Atomic CSS が有効な事例

### 巨大サイト

- 詳細度が 0010 と非常に低く、基本的にセレクタとプロパティが 1:1 なので、いくら追加しても悪影響がない
- 下記のような肥大化を防げる

> CSS の命名に関しては、「general」と、「default」と、「common」が使い分けられてるのもヤバいです。

- <https://twitter.com/tail_y/status/850660464656654336>

### 予測できない Web デザイン

- サイト全体のデザインの統一感に乏しく、ここの隙間だけを空けてほしい、といったことが、普通にある。つまり、予測できない。

### 制約によってサイトの統一感を緩やかに促す

- 無意識に要素の余白を 10px 単位で空ける行為や、不用意に 19px のフォントサイズを使うといったことを防げる
- CSS デザインに不慣れな人でも Atomic CSS を組み合わせるだけで作業できる

## Atomic CSS の命名規則

わたしの場合は emmet を参考にしています。

- <https://docs.emmet.io/cheat-sheet/>

## 注意事項

- Atomic CSS と Atomic Design は異なる
- Atomic CSS は既存のクラスと併存できる

## Atomic CSS 公式サイト

- <https://acss.io/>
