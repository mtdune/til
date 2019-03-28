# WEB+DB PRESS vol.102

## P.54 サービス改善のノウハウ 日経電子版

インフラ

- 環境 AWS Elastic Beanstalk の Docker
- インスタンス数 t2.medium 深夜帯 8 台～ピーク時 50 台
- CDN Fastly … キャッシュのほかに A/B テストマイクロサービスのルーティングや JSON Web Token を担う
- Fastly VCL を用いてキャッシュ条件をこまかく制御し、ログインユーザに対して 80% のキャッシュヒット率

コンテンツの事前読込

- Service Worker によるプリキャッシュ（事前読込）
- Resource Hints の prerender による事前レンダリング
- JS/CSS ファイルは link 要素で preload する
- 外部ドメインの広告は dns-prefetch で名前解決する
- JS は async による非同期読込（ブラウザ描画をブロッキングさせない）
- リフローとリペイントを極力発生させない
- <https://speedcurve.com/>

ネイティブアプリの UI/UX 改善

- iOS/Android それぞれのデザインガイドラインに従う原則（画面 UI/UX がそれぞれ異なる）
- fladdict の深津さんによる監修
- KPI のダッシュボード表示
- 継続的な A/B テスト（当然、失敗もある）
- Firebase Remote Config
- Adobe Analytics
- <https://redash.io/>
