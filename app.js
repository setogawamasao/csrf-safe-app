const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const Tokens = require("csrf");

const app = express();
const port = 3001;
const tokens = new Tokens();

// htmlテンプレートエンジンを設定
app.set("view engine", "ejs");

// requestのbodyから値を取得する設定
app.use(bodyParser.urlencoded({ extended: false }));

// session設定
app.use(session({ secret: "secret_key" }));

app.get("/login", (req, res) => {
  req.session.destroy((err) => {
    res.render("./login.ejs");
  });
});

app.post("/authorize", (req, res) => {
  if (req.body.userId !== "suzuki" || req.body.password !== "123") {
    throw new Error("ログイン情報が不正です");
  }

  // csrf対策
  const secret = tokens.secretSync();
  const token = tokens.create(secret);
  req.session._csrf = secret;

  const userId = req.body.userId;
  req.session.userId = userId;
  const data = {};
  data.userId = userId;
  data.csrfToken = token;
  res.render("./change.ejs", data);
});

app.post("/change", (req, res) => {
  // ログイン状態の確認
  if (!req.session.id) {
    throw new Error("ログインしてください");
  }
  console.log("session id : ", req.session.id);

  // csrf対策
  const secret = req.session._csrf;
  const token = req.body._csrf;
  if (tokens.verify(secret, token) === false) {
    throw new Error("CSRF攻撃を受けています");
  }

  // ★本来ここでパスワードの変更処理を実施する★

  const data = {};
  data.userId = req.session.userId;
  data.password = req.body.password;

  res.render("./result.ejs", data);
});

app.listen(port, () => {
  console.log(`safe app listening at http://sample.com:${port}/login`);
});
