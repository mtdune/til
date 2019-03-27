# VPN

## 接続テストの順番

通常 PC のファイアウォールと IDS の設定が間違ってなければ、社内側 PC と Mac どちらの方向も ping が通る。

- 社内側 PC を VPN サーバに接続する
- MacBook を VPN サーバに接続する
- PC と MacBook の VPN サーバなしの状態で Microsoft Remote Desktop が接続できるか確認する
- VPN 接続した状態で Microsoft Remote Desktop に接続できるか確認する

## 社内側 PC の設定

準備

- Windows 10 Pro のライセンスキー
- VPN アカウント名
- VPN パスワード
- IPsec 事前共有鍵

Microsoft Remote Desktop の手順

- Windows + e でファイルエクスプローラ起動
- マイコンピュータを右クリック、プロパティを開く
- コントロールパネル、システムとセキュリティ、システムを開く
- コントロールパネルの左サイドバーのリモート設定、リモートのタブを開く
  - このコンピュータへのリモートアシスタンス接続を許可する
  - このコンピュータへのリモート接続を許可する
  - ネットワークレベル認証でリモートデスクトップを実行しているコンピュータからのみ接続を許可する（推奨）
- 社内側 PC のネットワーク設定が（パブリックではなく）プライベートになっているか確認する

必要に応じて、セキュリティソフトの設定を変更する。

- IP アドレスの確認は ipconfig コマンドで確認できる

## リモート側 MacBook の設定

基本的に macOS の標準機能で VPN 接続が可能。

- <https://www.softether.org/4-docs/2-howto/9.L2TPIPsec_Setup_Guide_for_SoftEther_VPN_Server/5.Mac_OS_X_L2TP_Client_Setup>
  - ただし Network の Option タブ Send all traffic over VPN connection は無効にする
- DNS サーバの登録は不要
- macOS のネットワーク優先度は wifi が上位 VPN が下位とする

### VPN 接続後 Microsoft Remote Desktop クライアントのインストール

App Store にある Microsoft Remote Desktop 8 や Microsoft Remote Desktop 10 は日本語の JIS キーボードでは正しく日本語入力できない。そのため下記のクライアントをインストールする。

- Parallels Client

参考 URL

- <https://qiita.com/hidecha/items/33624f6ae57d41f3cd86>

### hosts ファイルの書き換え

環境によっては IP アドレスが切り替わるため hosts ファイルの切り替えが必要。そのため VPN の起動と終了と同時に hosts を書き換えるとよい。

hosts ファイル書き換え付き VPN 開始スクリプト

```bash
#!/bin/bash
networksetup -connectpppoeservice 'FOOBAR'
sudo sed -i '.backup' -e 's/^192.168.0./XXX.XXX.XXX./g' /private/etc/hosts
```

hosts ファイル書き換え付き VPN 終了スクリプト

```bash
#!/bin/bash
scutil --nc stop 'FOOBAR'
sudo sed -i '.backup' -e 's/^XXX.XXX.XXX./192.168.0./g' /private/etc/hosts
```

ap 確認シェルスクリプト（バッククォーテーション記号はコマンド実行のために必須）

```bash
#!/bin/bash
ap_name=`networksetup -getairportnetwork en0`
ap_name=${ap_name##*: }
echo $ap_name
```

## リモート側ルータ設定（自宅）

下記を有効にする

- ルーターの PPTP を有効にする
- ルーターの IPsec を有効にする
