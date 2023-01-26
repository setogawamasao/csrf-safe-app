const express = require("express");
const session = require("express-session");
const csrf = require("csurf");

const app = express();
const port = 3001;

// htmlテンプレートエンジンを設定
app.set("view engine", "ejs");

// sessionの設定
app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

// requestのbodyから値を取得する設定
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// CSRF対策
const csrfProtection = csrf({ cookie: false });

app.get("/", csrfProtection, (req, res) => {
  const userId = "yamada";
  // セッションにユーザーIDを格納
  req.session.userId = userId;
  var data = {};
  data.userId = userId;
  data.csrfToken = req.csrfToken();
  res.render("./index.ejs", data);
});

app.get("/change", csrfProtection, (req, res) => {
  var data = {};
  data.csrfToken = req.csrfToken();
  res.render("./change.ejs", data);
});

app.post("/submit", csrfProtection, (req, res) => {
  var data = {};
  data.userId = req.session.userId;
  data.password = req.body.password;
  data.csrfToken = req.csrfToken();
  res.render("./result.ejs", data);
});

app.listen(port, () => {
  console.log(`danger app listening at http://localhost:${port}`);
});
