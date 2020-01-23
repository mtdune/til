# vue.js

## node 削除

- この mac に node をインストールした方法がわからない
- npm, homebrew, nodebrew, yarn etc
- \$ brew uninstall yarn
- まだ node が残っているので下記を参考に `brew doctor` の指示に従って削除
- <https://yoshikiito.net/blog/archives/762/>
- `brew list` でいくつかのパッケージが残っているので `brew uninstall hoge` で削除
- `brew update`

## node インストール

今回は nodebrew で node.js と npm をインストールする。
yarn は必要になったらインストールする。

- <https://qiita.com/yukibe/items/bae442fa6314bd8f9d7a>

アップデート

- <https://qiita.com/yukibe/items/dd8ff2ba1a6950b8e0f5>

## 作業準備

```ShellScript
vue init webpack foobar
cd foobar
npm run dev
npm install sass-loader node-sass --save-dev
git init
git config --local --list
git config --local user.name foobarman
git config --local user.email foobarman@example.com
npm install sass-loader node-sass --save-dev
npm run dev # Close is ctrl + c
```

## エラー対策

`Module build failed: TypeError: this.getResolve is not a function`

上記のエラーが表示される場合の対策

- <https://qiita.com/gosairei1207/items/95454ec5a396bd5f05fd>
- <https://shiranuik.hatenablog.jp/entry/2018/02/16/184551>

npm install されたパッケージの確認

```ShellScript
npm ls --depth=0
```
