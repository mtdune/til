# 2ch まとめサイト

## 方針

- 板、スレッドの指定、記事名は手動だが、スレッドは自動で行う
- 静的ファイルを CDN におき、体感速度をあげる
- 月 100 円でもよいので売上をあげる（これを百個に増やせばよい）

## 準備

準備

- スレッドの URL
- 記事名の記入
- 解析結果の html

開発

- HTML/DAT 変換
- 記事名生成
- スレッド解析

## DAT 取得

2015 年頃から基本的には DAT 提供はなくなり、専用ブラウザ用の鍵付き API の提供に移行している。

- <http://prokusi.wiki.fc2.com/>

そのため HTML から DAT 変換する必要がある。

サーバサイドで直接 HTML を取得すると、簡単に BAN されるため、ローカルで走らせる必要がある。

- もしくはブラウザで html を取得（原始的に ctrl + u でコピペでもよい）して、解析サーバに送信、解析結果をうけとる等

方針としては一行一行処理するか DOM で解析するかの二者択一。後者のほうが素性がよい。

- <https://sourceforge.net/projects/simplehtmldom/files/>

## 記事名生成

- 某サイトの title を一覧にして、どういう煽り方があるか吟味する
- 差し替えても意味が成立するようにテンプレート化する

## スレッド解析

- 旧版のすべてのファイル ver.1 系と解析部分をもとにこれから作る ver.2 系の private リポジトリをふたつ作る
- ver.1 と ver.2 を git 管理下におく
- private リポジトリに push する
- DAT 形式のデータを以前のプログラムに入力して、出力を確認する

## 静的 HTML 生成

- 静的 HTML を CDN におくことで表示速度をあげる

## サイトの構造

既存の静的サイトジェネレータかなにかでこの作業を省けないか調査する。

- トップページ
  - ページネーション
  - サイドバー
- 記事個別ページ
  - ページネーション
  - サイドバー
- タグごとのページ
  - ページネーション
  - サイドバー
- サイドバー
  - 管理人プロフィール
  - タグ一覧

## サイトの URL

- /
- /articles/9999999
- /articles/9999999/日本語記事名
- /tags/foo
- /tags/bar
- /races/9999
- /species/9999
- /types/foo
- /types/foo+bar
- /move/

## タグ

- 西暦
- 年月

ポケモン関連の場合

- レイド
- ジム戦
- PvP
- 種族名
- わざの名前（ハードプラント等）

## WordPress

WordPress を置くドメインと、静的ファイルのみを置いたドメインを完全に分離させれば WordPress に攻撃や障害（アップデートの失敗や DB 障害など）がおきても問題ない。

- WordPress の静的出力

StaticPress + s3

- <http://webfood.info/staticpress-s3/>

## Netlify CDN

Netlify に載せる。

- <https://qiita.com/yahsan2/items/39eb9e3e19f72257084c>

## その他

- ローカル開発環境
- ドメイン名取得
- 新規ドメイン名 @gmail の新規の Google アカウント登録（完全に切り離す）
- Google Analytics 導入
- まとめサイト申請
  - <https://5ch.net/matome.html>
- heroku の hobby plan 7 USD/Month かどこか git push でデプロイできるところよい
- SSH 接続できれば Codeship の鍵を登録することで Codeship 経由で github からデプロイできるらしい
- <https://qiita.com/junpeko5/items/087704082df9912cb4fd>
- SSL 対応
- 無料 CDN
- お問い合わせフォーム
- 広告の選定
- 種族名の自動リンク機能？
  - JavaScript による形態素解析で文字列が、配列と一致していたらリンクにする。

## 種族

- 種族名
- 種族値
- 最大 CP
- タイプ
- 弱点
- 耐性
- わざ（逆引き可能）
- 現在、進化後の CP1500/CP2500 までの目安 CP
- 画像
- SCP 算出値？
