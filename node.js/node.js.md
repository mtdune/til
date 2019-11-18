# node.js

## 準備

まず最初に node.js や npm の管理を nodist で管理するために、古い npm.exe や npm.cmd がある場合は削除する。

- nodist for Windows

```bash
nodist ls # バージョン確認
nodist add # バージョンでインストール
nodist use # バージョンでバージョン切り替え
nodist npm match # npm のバージョンを切り替える
```

Windows の環境によっては Nodist のインストール時に `PATH no updated, original length XXXX > 1024` と表示される。この場合は手動で環境変数を設定する。

- <https://uchiko.hatenablog.com/entry/2019/06/17/090000>
- インストール先を C:¥ 直下に変更しても同じエラーが表示される
- この記事通りにすれば node と npm を最新版にアップデートできる

## Windows 環境でのターミナル

Hyper

- macOS と Windows どちらでも使用できる
- Windows では Windows のコマンドのみ使用できる
- powerline を簡単に設定する拡張機能はない様子

Cmder

- Windows 版のみ
- Full 版は git for Windows が含まれる
- Linux コマンド？を使用できる
- zip ファイルを解凍し `C:¥Program Files(x86)¥` 以下に移動する
- `Source Code Pro for Powerline` フォントをインストールする
- `cmder¥vendor¥clink.lua` ファイルの `local lambda = "λ"` を `local lambda = ">"` に変更する
- 右下 Settings > General > Fonts > Monospace のチェックを外して Save settings ボタンを押下する
- 右下 Settings > Startup > Environment に `set LANG=ja_JP.UTF-8` を追加して Save settings ボタンを押下する

Cmder での powerline インストール

- `cmder¥powerline¥` のようなディレクトリを作成する（どこでもよい）
- `git clone --depth 1 https://github.com/AmrEldib/cmder-powerline-prompt`
- clone した cmder-powerline-prompt の .lua.sample を .lua に変更する
- clone した cmder-powerline-prompt の *.lua ファイルを `cmder¥config¥` にコピーする
- _powerline_config.lua の `plc_prompt_lambSymbol` を `>` 記号に変更する
- _powerline_config.lua の `plc_prompt_type` を `full` に変更する
- 右下 Settings > General > Fonts > Main console font を `Source Code Pro for Powerline` に変更する
- 右下 Settings > General > Fonts > Main console font > Bold にチェックに入れる（任意）
- 右下 Settings > General > Fonts > Alternative fonr(pseudographics, CJK, etc.) を`Source Code Pro for Powerline` に変更する
- `cmder¥vendor¥clink.lua` の `clink.prompt.register_filter` の hg_ git_ svn_ の行頭に -- をつけてコメントアウトする（若干速くなる）
- <https://blog.mamansoft.net/2018/11/18/use-cmd-elegant-on-cmder-phase1/>
