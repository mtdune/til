# git

## アカウント名とメールアドレスの統一

まず、ローカルの該当ディレクトリに移動して local の設定を確認する。

- `git config user.email`
- `git config user.email [foobar@example.com]`
- `git config user.name`
- `git config user.name [foobar]`

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

fetch して merge する。この場合 `--allow-unrelated-histories` が必要。

- `git fetch && git merge origin/master --allow-unrelated-histories`
- <https://qiita.com/takanatsu/items/fc89de9bd11148da1438>

備考

- github に複数のメールアドレスを登録している場合 primary 以外でも問題なく、草が生える
