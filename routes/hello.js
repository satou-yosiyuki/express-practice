var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  const name = req.query.name;
  const email = req.query.email;
  const data = {
    title: "Hello!",
    content: "私の名前は" + name + "。" + "メールアドレスは" + email + "です。",
  };
  res.render("hello", data);
});

module.exports = router;