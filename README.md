# typescriptの手順書

## 開発環境導入 WSL用 (Ubuntu) 

node.jsとnpmをaptでインストール

```
$ sudo apt install -y nodejs npm
$ sudo npm install -g n
$ sudo npm install -g typescript
$ npm install browserify tsify typescript watchify catw http-server --save-dev
$ npm install jquery @types/jquery skeleton-css --save
```

昔ssl死んでた時のメモ

```
$ npm config set strict-ssl false
$ npm config set strict-ssl true
```

strict-sslはhttps のレジストリに対して、SSL 鍵のバリデーションの回避を一時的に行う。

古いパッケージの抹殺

```
$ sudo apt purge -y nodejs npm
```

パッケージアップデート

```
$ sudo n stable
$ sudo chown -R $USER:$(id -gn $USER) /home/shimizu/.config
```

## 実行環境作成

初めてnpmプロジェクトの作成

```
$ npm init
$ npm install --save-dev [package]
$ tsc --init
```

npmプロジェクトを復元する

ワカラナイ…

[がんばらないTypeScript環境ほしい](http://wakame.hatenablog.jp/entry/2016/12/24/232110)