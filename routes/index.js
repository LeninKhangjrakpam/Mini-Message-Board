var express = require("express");
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});
router
  .route("/new")
  .post((req, res) => {
    const text = req.body.messageText;
    const user = req.body.author;

    if (!text || !user)
      return res.render("form", {
        title: "Form",
        errorMsg: "Invalid form value",
      });

    messages.push({ text, user, added: new Date() });
    res.redirect("/");
  })
  .get((req, res) => {
    res.render("form", { title: "Form" });
  });

router.get("/pp/", (req, res) => {
  console.log(req.query.q);
  res.redirect("/");
});
module.exports = router;
