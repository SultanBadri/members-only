const User = require("../models/userModel");
const passport = require("passport");
const bcrypt = require("bcryptjs");

exports.getIndexView = (req, res) => res.render("index");

exports.getSignUpForm = (req, res) => res.render("sign-up");

exports.handleSignUp = async (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    const user = new User({
      username: username,
      password: hashedPassword,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
};

exports.getLoginForm = (req, res) => res.render("login");

exports.handleLogin = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});

exports.handleLogout = (req, res) => {
  req.logout();
  res.redirect("/");
};
