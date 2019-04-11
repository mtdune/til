# Wordmove

## WordPress 本体アップデートの手順

### 1. localhost の作業

```bash
wordmove pull -e production --all

wp search-replace 'https://SERVER-URL' 'http://localhost:8000' --dry-run
wp search-replace 'https://SERVER-URL' 'http://localhost:8000'
```

### 2. サーバ側の作業

```bash
su -
chown -R WORDMOVE-SSH-USER:WORDMOVE-SSH-USER /path/to/wordpress-directory
find WORDPRESS-DIR -type f -exec chmod 664 {} ¥;
find WORDPRESS-DIR -type d -exec chmod 775 {} ¥;
exit
```

### 3. push 作業

```bash
wordmove push -e staging --all --no-db
wordmove push -e staging --db

# SSH 接続。以下 utf8mb 非対応のMySQL 5.1 サーバの場合
su -
cd /path/to/wordpress-directory/wp-content
vi dump.sql # Replace utf8mb4 to utf8
mysql -uroot -p DATABASE-NAME < dump.sql
exit
```

### 4. local の WordPress 更新作業

```bash
cd /path/to/wordpress-directory
wp core update
wp core update-db
wp plugin update --all
```

- アップデート後、コンテナの WordPress 管理画面にログインできない場合は再度 wp search-replace を使用する

### 5. staging 環境に push する

```bash
wordmove push -e staging --all --no-db
wordmove push -e staging --db

# SSH 接続。以下 utf8mb 非対応のMySQL 5.1 サーバの場合
su -
cd /path/to/wordpress-directory/wp-content
vi dump.sql # Replace utf8mb4 to utf8
mysql -uroot -p DATABASE-NAME < dump.sql
exit
```

### 6. production 環境のバックアップ作業

```bash
su -
cp -a /path/to/wordpress-directory /path/to/wordpress-mirror
diff -r /path/to/wordpress-directory /path/to/wordpress-mirror
mysqldump -uroot -p YOUR-WORDPRESS-DB > ./wordpress_dump.sql
```

### 7. production 環境に push する

```bash
wordmove push -e production --all --no-db
wordmove push -e production --db

# SSH 接続。以下 utf8mb 非対応のMySQL 5.1 サーバの場合
su -
cd /path/to/wordpress-directory/wp-content
vi dump.sql # Replace utf8mb4 to utf8
mysql -uroot -p DATABASE-NAME < dump.sql
exit
```
