# PC Setup

## モバイル PC

- メモリ 8GB
- SSD 128GB
- 重量 1.1 kg 以下
  - MacBook Air 1.2 kg は重い

## Windows

- Adobe CS
- Docker for Windows
- FileZilla
- Firefox
- FreeCommander XE(Filer)
- Google Chrome
- Google IME
- Slack
- Sourcetree
- VSCode
- WinMerge
- WinSCP
- nodist … Natural node.js and npm version manager for windows.

WinMerge でのサブフォルダ比較

- <http://ryoichi0102.hatenablog.com/entry/2014/06/30/203530>
  - diff -r で足りそう

### Windows ターミナル環境

- 2019-12-05 現在開発中の Windows Terminal が本命では？

試す

- <https://cmder.net/>
- <https://hyper.is/>

SSH クライアント

- RLogin
- Poderosa
- TeraTerm
- PuTTY

参照

- [Windows で使えるターミナルとシェルのまとめ - Qiita](https://qiita.com/Ted-HM/items/9a60f6fcf74bbd79a904)
- <https://qiita.com/murachi1208/items/d6e4ce7ba75f1625fe51>

WSL: Windows Subsystem for Linux ベースにしたほうがよいかもしれない。

- WSL + Hyper

## macOS

- Docker for Mac
- FileZilla
- Firefox
- Google Chrome
- Google IME
- iTerm
- Numbers
- Pages
- Parallels Client(VPN Client)
- Slack
- VSCode
- Sourcetree
- anyenv + nodenv

Subversion の GUI が必要な場合（基本的には CUI で足りるはず）

- SnailSVN Lite: SVN for Finder
  - <https://itunes.apple.com/jp/app/snailsvn-lite-svn-for-finder/id1063090543/>

iMac の場合は SSD 交換を検討する

- <https://www.landerblue.co.jp/blog/?p=43061>
- <https://www.skd.ne.jp/wp/>

### macOS クリーンインストール手順

OS インストール

1. USB メモリに Mojave 起動ディスク作成
1. SMC リセット
1. NVRAM/PRAM リセット
1. Option キーを押しながら再起動

環境構築

1. アプリケーションのインストール
1. リモート・リポジトリの Clone
1. SFTP 接続先の設定
