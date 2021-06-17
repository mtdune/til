# Windows Terminal

- 環境 Windows 10 Pro

## 公式ドキュメント

- <https://docs.microsoft.com/ja-jp/windows/terminal/>

## 外観

- 文字サイズのリセット `ctrl + 0`

## 画面分割ペインの操作

- 画面分割（ペイン）
  - 垂直方向 `alt + shift + plus`
  - 水平方向 `alt + shift + -`
  - サイズ変更 `alt + shift + 方向キー`
- 画面分割（ペイン）を閉じる
  - `ctrl + shift + w`
- ペインの移動
  - `alt + 方向キー`
- ペインの複製
  - `alt + shift + d`

## Windows Terminal を起動できない場合

私の場合、下記のエラーが発生して Windows Terminal を起動できない状態になりました。

```['powershell.exe' の起動時にエラー 0x80070002 が発生しました]```

手順

- Windows Update で Windows 10 を最新の状態にする
- dism.exe と sfc /scannow で Windows の状態を調べる
  - <https://onoredekaiketsu.com/repair-windows-with-dism-and-sfc-scannow/>
- Powershell を最新の stable 版もしくは LTS 版に更新する
  - <https://github.com/PowerShell/PowerShell>

## SSH できない場合

- Windows 10 管理画面で OpenSSH クライアントが入っていることを確認する
  - <https://www.howtogeek.com/336775/how-to-enable-and-use-windows-10s-built-in-ssh-commands/>
  - 設定 → アプリ → オプション機能
- ssh.exe の有無を調べる
  - `dir C:\Windows\System32\OpenSSH\ssh.exe`
- path を通す
  - `%SystemRoot%\System32\OpenSSH`
- ssh コマンドは実行できるが `WARNING: UNPROTECTED PRIVATE KEY FILE!` と表示される場合
  - 自分の秘密鍵 id_rsa を `C:\Users\foo\Documents\` 以下にコピーする
  - 例えば `C:\Users\foo\Documents\ssh\` など

## ワンクリックで SSH 接続する

- よくある、ショートカットで powershell 経由のパスに変更する方法はエラーで実現できず
- Windows Terminal の設定ファイルでショートカットを追加する方法がよい（さきに SSH 接続できる状態にする）
- どのサーバに接続しているかわかるように `colorScheme` か `background` を変更したほうがよい（必ず間違えるため）

```,
            {
                "name": "foo server",
                "commandline": "ssh foo@servername -i \"C:\\Users\\foo\\Documents\\ssh\\id_rsa\" -o ServerAliveInterval=60",
                "hidden": false,
                "icon": "C:\\Users\\foo\\Documents\\ssh\\favicon.png",
            }
```

設定ファイルのパス

- [設定] > [JSON ファイルを開く]
