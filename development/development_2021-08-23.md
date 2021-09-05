# Development 2021-08-23

## 開発環境

### 想定 Web サーバ 1 台 + DB サーバ 1 台の構成

- heroku
  - 有料版を使用するつもりならば問題ない
  - 無料版は NG かと思ったが、試すのは有りな気がする
- VPS の dokku で docker イメージを実行する
  - 調査してもほとんど情報がないため NG かと思ったが、今思うと試してみるのは有りな気がする
  - VPS のメモリは最低 1GB 必要
- deployer で本番 VPS サーバにデプロイする
  - 基本的にはこの選択が安全
- ローカルの docker 開発のファイルを rsync で本番 VPS サーバに反映する
  - ローカルと本番の差異をプログラム内部で吸収する必要があり、コードが無駄に膨らむ
- react で開発して Netlify におく
  - これが一番よい
  - 別途 DB サーバが必要
  - 今回はクローラやスクレイピングもあり、開発を優先するため NG

### 手続き

- Gmail アカウント取得（プロジェクトごと）
  - 基本 example.com@gmail.com のように TLD を含むアカウント名で作成する
- ドメイン名取得
- twitter アカウント取得
- Heroku アカウント取得

### Heroku

- Web サーバは無料
- DB サーバも最初は無料 Hobby Dev で開発して一般公開状態になったときに Hobby Basic $9 にプラン変更すればよい
- Hobby Basic の 1000 万行で足りない場合は Hobby Basic を追加する
- git と docker イメージからの二種類のデプロイ方法がある
  - 下記をみるかぎり、いつでもどちらでも使い分けられそう（基本 git でよさそう）
  - <https://note.com/akiko_pusu/n/n630014f0ea19>

### Dokku

- <https://www.slideshare.net/KeitoTakeda/web-249843953>
- <https://www.slideshare.net/znzjp/dokku-165791253>
- <https://qiita.com/momotaro98/items/17078b5cdec9b64588af>
- <https://qiita.com/gn_spawn/items/712349b5b0ebaf4b0203>

### ユーザアカウント管理

- とくに開発する必要がないならば Firebase Authentication

### 電子メール送信

- SendGrid 一択
  - 無料で月 12000 通送信できる
  - <https://sendgrid.kke.co.jp/plan/>
