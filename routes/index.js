var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Members Only" });
});

/* GET sign up page */
router.get("/sign-up", function (req, res, next) {
  res.render("sign-up", { title: "Sign up" });
});

/* GET log in page */
router.get("/log-in", function (req, res, next) {
  res.render("log-in", { title: "Log in" });
});

/* GET log out page */
router.get("/log-out", function (req, res, next) {
  res.render("log-out", { title: "Log out" });
});

/* GET become member page */

/* GET post message page */

/* GET become admin page */

module.exports = router;
