# Headless CMS

contentful

- Headless CMS サービス
- フロントエンドの実装は存在しないため、すべて実装する必要がある
- 全文検索 API などは実装済みなので、安心できる側面もある（単なる DB の GUI サービスではない）

strapi

- The open source Headless CMS
- 別途 node.js サーバが必要

その他

- <https://graphcms.com/>

## 構造

1. contentful -> nuxt.js
1. contentful -> nuxt.js -> SSR
1. contentful -> nuxt.js -> generated static file(S3/CloudFront etc)

## Webhooks

- contentful の変更を Netlify や Heroku に反映する

## .env

- ID や Token などは .env ファイルにおく

## TODO

- Netlify アカウント作成
- contentful アカウント作成

## チュートリアル

Integrate Contentful with Nuxt.js

- <https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/>

## 利用料金

contentful の料金試算

- <https://qiita.com/taichi0514/items/82b9f47e5e97688edadd>

## Import and Export

production 環境のデータのバックアップや export したデータを operation 環境に import して同期をとりたい。

- <https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/>
