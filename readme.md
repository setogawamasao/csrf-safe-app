# CSRF 学習用サンプルアプリ

このアプリは CSRF 攻撃に対して脆弱性を対策したアプリです。  
脆弱性対策前のアプリ(https://github.com/setogawamasao/csrf-dangerous-app)  
他に、脆弱性を利用した罠アプリ(https://github.com/setogawamasao/csrf-trap-app)  
がありますので、併せてクローンしてください。

## 解説

- 解説は以下の YOUTUBE 参照

## setup

- hosts ファイルに追記  
  windows であれば、hosts ファイルは下記に格納されている  
  C:\Windows\System32\drivers\etc

  hosts ファイルに下記を追記して、localhost に別名を付ける  
  127.0.0.1 sample.com trap.com

- npm install

## 起動

- Node.js をインストールして、下記コマンドを実行  
  npm run start

## 接続

- 立ち上がったら、ブラウザから下記にアクセス  
  http://sample.com:3001/login
