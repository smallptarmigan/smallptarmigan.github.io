# typescriptの手順書

## 開発環境導入 WSL用 (Ubuntu) 

node.jsとnpmをaptでインストール

```
$ sudo apt install -y nodejs npm
$ npm config set strict-ssl false
$ sudo npm install n -g 
$ sudo npm install -g typescript
$ npm config set strict-ssl true
```

strict-sslはhttps のレジストリに対して、SSL 鍵のバリデーションの回避を一時的に行う。

古いパッケージの整理

```
$ sudo n stable
$ sudo apt purge -y nodejs npm
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

