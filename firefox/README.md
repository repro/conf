`Sample Installation`

**Saving current cookies excepions file**
cp .mozilla/firefox/*.default/permissions.sqlite .
**Saving current cookies**
cp .mozilla/firefox/*.default/cookies.sqlite .
**Exploring file content**
sqlite3 permissions.sqlite
select * from sqlite_master;
select * from moz_hosts;
sqlite3 cookies.sqlite
select * from moz_cookies;

**Deletingg current config**
rm -rf .mozilla/firefox
**Create default directory tree
firefox -preferences
**Copying user config**
cp user.js .mozilla/firefox/*.default/

**Restore cookies and cookies exception files**
cp permissions.sqlite .mozilla/firefox/*.default/
cp cookies.sqlite .mozilla/firefox/*.default/

