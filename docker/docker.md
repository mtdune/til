# Docker

## 短期的な目標

イメージファイルでは差分がとれない？ため、基本的には docker-compose.yaml を git にいれて、運用する必要がある。

- WordPress と MySQL の公式イメージをベースにする
- VCCW のように容易に使用できるとよい
- docker-compose.yaml で WordPress と MySQL のコンテナが run されること

## 手順

インストール前に `dpkg -l [package]` でパッケージがインストール済みか確認する。

- ruby 2.4.x インストール
- rbenv インストール
- wp-cli インストール
- WordMove インストール
- ホストとのディレクトリ共有
  - これは run する際に yaml ファイルで選択できるようにする

## Docker 以外の選択肢

Docker だけでなく `systemd-nspawn` という選択肢もある。

- <https://anond.hatelabo.jp/20170309040708>
- <https://anond.hatelabo.jp/20170422000230>