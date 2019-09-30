# typescriptの手順書

## 開発環境導入 WSL用 (Ubuntu) 

node.jsとnpmをaptでインストール

```
$ sudo apt install -y nodejs npm
$ sudo npm install n -g
```

古いパッケージの整理

```
$ sudo n stable
$ sudo apt purge -y nodejs npm
```

## 実行環境作成

npmプロジェクトの作成

```
$ npm init
$ npm install --save-dev [package]
```

