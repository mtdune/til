# git

## ファイル名に大文字小文字が混在したファイルの扱い

未コミット状態でありながら Windows 上で該当のファイルが表示されない場合、ファイル名に大文字小文字が混在したファイルが commit されていることが多いです。

その場合は Windows 上では常にどちらかしか表示されないため、一方を削除する必要があります。こうしたファイルを削除するためには、大文字小文字を区別できる環境が必要です。例えば macOS や Windows 版 Sourcetree の MINGW32 上ならば、削除できます。

- <https://shogo82148.github.io/blog/2014/10/21/git-case-sensitivity/>

## アカウント名とメールアドレスの統一

まず、ローカルの該当ディレクトリに移動して local の設定を確認する。

```bash
git config user.email
git config user.email foobar@example.com
git config user.name
git config user.name foobar
git config --local --list
```

ログを確認する。

```bash
git log --pretty=full
```

一括置換する。

```bash
git filter-branch -f --env-filter \
"GIT_AUTHOR_NAME='foobar'; \
GIT_AUTHOR_EMAIL='foobar@example.com'; \
GIT_COMMITTER_NAME='foobar'; \
GIT_COMMITTER_EMAIL='foobar@example.com';" \
HEAD
```

- <http://sohtaro.com/blog/2017/06/11/git-author-email-replace/>

強制 push する。表記は origin/master ではなく origin master で正しい。

```bash
git push --force-with-lease origin master`
```

関連

- <https://qiita.com/takanatsu/items/fc89de9bd11148da1438>

備考

- github に複数のメールアドレスを登録している場合 primary 以外でも問題なく、草が生える

## 強制 pull

```bash
git fetch origin master
git reset --hard origin/master
```

## 最新のコミットの修正

Commiter の修正

```bash
git commit --amend
```

Author の修正

```bash
git commit --amend --author="foobar <foobar@example.com>"
git rebase --continue
git log --pretty=full
git push origin master -f
```

## ローカル・リポジトリを GitHub に push する

### push

（コミットログなしの）ソースコードだけならば zip 形式で圧縮すれば Google Drive などで共有できる。

- GitHub にリポジトリを作成する
- ローカルの設定を確認、必要に応じて修正する

```bash
git config --local --list
```

- GitHub のリポジトリに push する

### リポジトリの zip 圧縮

基本的に git archive コマンドで zip 形式で圧縮する。利点は zip に含むファイルやディレクトリを操作できること。

リポジトリの直下に .gitattributes をおく。下記は記入例。

```bash
# comment
.DS_Store export-ignore
.git/ export-ignore
.gitattributes export-ignore
.gitignore export-ignore
.vscode/ export-ignore
foo/bar/ export-ignore
foo.php export-ignore
bar.php export-ignore
```

下記のコマンドで zip ファイルをつくる。

```bash
git archive --format=zip HEAD > ../foo.zip
```

注意点

- 上記の場合 HEAD 指定なので .gitattributes を修正した場合は git commit が必要
- <https://git-scm.com/docs/gitattributes>
- .gitattributes で改行コードの制御も可能（必要な場合）

.gitignore 同様にファイル名の記述については下記を参照のこと

- [.gitignore ファイルに記述するパターンの規則](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E5%9F%BA%E6%9C%AC-%E5%A4%89%E6%9B%B4%E5%86%85%E5%AE%B9%E3%81%AE%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%B8%E3%81%AE%E8%A8%98%E9%8C%B2#r_ignoring)

### 関連

- <https://github.com/github/gitignore>

### master ブランチ以外のブランチの push

```bash
git remote add origin https://github.com/foo/bar.git
git push -u origin master

git push origin master:develop # 誤
git push origin develop:master # 誤
git push origin develop:develop # 正 git push origin local:remote
git push origin master:master # 正
```

### GitHub のブランチの削除

- master 以外のブランチの場合、ブラウザ上でブランチを表示させて、ゴミ箱のアイコンを押下する
- master ブランチの場合

```bash
git push -f origin master
```