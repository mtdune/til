# PHP

## CentOS 6 サーバの PHP を安全にアップデートする

事前の調査

```bash
su -
cat /etc/redhat-release # CentOS のバージョン調査
php -v # PHP のバージョン調査
yum update yum # --assumeno オプション使用のため
yum check-update | grep php # インストールされている PHP のパッケージの調査
```

依存性の確認 PHP 5.6 系の場合

```bash
su -
# yum install --enablerepo=remi,remi-php56 --assumeno php # NG
# yum install --disablerepo=remi-php71 --enablerepo=remi,remi-php56 --assumeno php # NG
yum install --disablerepo=base,updates --enablerepo=remi-php56 --assumeno php # OK
yum install --disablerepo=base,updates --enablerepo=remi-php56 -y php # インストール実行
php -v # PHP のバージョン調査
service httpd graceful # httpd 再起動
```

依存性の確認 PHP 7.1 系の場合

```bash
su -
yum install --disablerepo=base,updates --enablerepo=remi-php71 --assumeno php # OK
yum install --disablerepo=base,updates --enablerepo=remi-php71 -y php # インストール実行
php -v # PHP のバージョン調査
service httpd graceful # httpd 再起動
```

参考

- <https://akamist.com/blog/archives/648>
- <https://laboradian.com/centos6-yum-update-remi-php70-error/>
