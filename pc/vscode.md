# VSCode

## Extentions

- Prettier
- markdownlint
- EditorConfig for VS Code
- Lint の類
- コード整形
- encdetect jp … 日本語文字コード判定機能。文字コードに UTF-8 以外のファイルがある場合に使用する
- Auto Rename Tag
- Code Runner … その箇所のコードのみを実行する拡張機能
- HTMLHint … HTML Linter
- jumpy … キーボード・ショートカット操作の拡張機能（デフォルトではショートカット未設定）

## キーボード・ショートカットの設定・変更

- cmd+k cmd+s の操作で、キーボード・ショートカットの管理画面が表示される
- ショートカットを入力した場合は、入力したショートカットに他の割当がないか確認できる
- 拡張機能名をいれると、機能が一覧表示されるので、希望する機能の[+]をクリックすると、ショートカットを設定できる

## PHP 開発環境構築

thread safe 版 php.exe をインストールする。

- <https://www.elp.co.jp/staffblog/?p=5620>

## WordPress 開発環境構築

- <https://www.nxworld.net/services-resource/vscode-extension-for-develop-wordpress.html>

## 環境設定

- foo-workspace ファイルを削除して「フォルダを開く」を押下すると .vscode ディレクトリの settings.json を読み込む。

## Task and Build

## 設定

- hoge-fuga 形式の文字列をダブルクリックで選択できるようにする

```json
"editor.wordSeparators": "`~!@#$%^&*()=+[{]}\\|;:'\",.<>/?",
```

- ファイル名の表示

```json
"window.title": "${dirty}${rootName}${separator}${activeEditorLong}",
```

## Remote Development

- <https://www.publickey1.jp/blog/19/visual_studio_code_135remote_development.html>

## ワークスペースが再利用されない件

- 基本的に macOS 版では cmd + , で restore を検索して下記の設定を all としておけばよい
- Windows 版と macOS 版との違いとして Windows 版ではウィンドウを閉じれば、アプリケーション終了状態になるが macOS 版では終了状態にならないので window.restoreWindows の設定が効かない
- window.restoreWindows の設定を活かすためにはウィンドウを閉じるだけでなく cmd + q で vscode ごと落とす

```json
"window.restoreWindows": "all"
```
