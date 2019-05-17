# Windows Subsystem for Linux

## WSL 入門 第 1 回 Windows 10 標準 Linux 環境 WSL を始めよう

要点

- 使用する Ubuntu のディストリビューションには Ubuntu 18.04 LTS などいくつかあるが Ubuntu がよい
- 最初に入力するパスワードは sudo の際に使用する

起動

```bash
wslconfig.exe /l
wsl.exe -d Ubuntu
```

リンク

- <https://www.atmarkit.co.jp/ait/articles/1903/18/news031.html>

## WSL 入門 第 2 回 避けては通れない WSL と Windows 10 との文字コードの違い

```bash
# 設定の更新
sudo apt update
apt list --upgradable

# 日本語化
sudo apt -y install language-pack-ja
sudo update-locale LANG=ja_JP.UTF8
sudo apt -y install manpages-ja manpages-ja-dev
```

リンク

- <https://www.atmarkit.co.jp/ait/articles/1904/05/news027.html>

## WSL 入門 第 3 回

- <https://www.atmarkit.co.jp/ait/articles/1904/19/news033.html>
