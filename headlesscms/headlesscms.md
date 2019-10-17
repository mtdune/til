# Headless CMS

contentful

- Headless CMS サービス

strapi

- The open source Headless CMS
- 別途 node.js サーバが必要

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
