# git

## ファイル名に大文字小文字が混在したファイルの扱い

未コミット状態でありながら Windows 上で該当のファイルが表示されない場合、ファイル名に大文字小文字が混在したファイルが commit されていることが多いです。

その場合は Windows 上では常にどちらかしか表示されないため、一方を削除する必要があります。こうしたファイルを削除するためには、大文字小文字を区別できる環境が必要です。例えば macOS や Windows 版 Sourcetree の MINGW32 上ならば、削除できます。

- <https://shogo82148.github.io/blog/2014/10/21/git-case-sensitivity/>

## アカウント名とメールアドレスの統一

まず、ローカルの該当ディレクトリに移動して local の設定を確認する。

- `git config user.email`
- `git config user.email [foobar@example.com]`
- `git config user.name`
- `git config user.name [foobar]`
- `git config --local --list`

ログを確認する。

- `git log --pretty=full`

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

- `git push --force-with-lease origin master`

関連

- <https://qiita.com/takanatsu/items/fc89de9bd11148da1438>

備考

- github に複数のメールアドレスを登録している場合 primary 以外でも問題なく、草が生える

## 強制 pull

- `git fetch origin master`
- `git reset --hard origin/master`
