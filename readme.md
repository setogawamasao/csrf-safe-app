# CSRF 学習用サンプルアプリ

このアプリは CSRF 攻撃について学習することができるアプリです。  
3 つのリポジトリを通して学ぶことができます。

1. 脆弱性のあるアプリ(https://github.com/setogawamasao/csrf-dangerous-app)
2. 脆弱性を利用した罠アプリ(https://github.com/setogawamasao/csrf-trap-app)
3. 脆弱性を対策したアプリ(https://github.com/setogawamasao/csrf-safe-app)

このアプリは「3. 脆弱性を対策したアプリ」です。

## 解説

- 解説は以下の YOUTUBE 参照

## setup

- hosts ファイルに追記  
  windows であれば、hosts ファイルは下記に格納されている  
  C:\Windows\System32\drivers\etc

  hosts ファイルに下記を追記して、localhost に別名を付ける  
  127.0.0.1 sample.com trap.com

- Node.js をインストールして、下記コマンドを実行
  npm install

## 起動

- 下記コマンドを実行  
  npm run start

## 接続

- 立ち上がったら、ブラウザから下記にアクセス  
  http://sample.com:3001/login
