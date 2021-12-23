const User = require("../models/userModel");
const passport = require("passport");
const bcrypt = require("bcryptjs");

exports.getSignUpForm = (req, res) => res.render("sign-up");

exports.handleSignUp = async (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    const user = new User({
      username: username,
      password: hashedPassword,
      isMember: true,
      isAdmin: false,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
  });
};

exports.getLoginForm = (req, res) => res.render("login");

exports.getLoginFailForm = (req, res) => res.render("login-fail");

exports.handleLogin = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login-fail",
});

exports.handleLogout = (req, res) => {
  req.logout();
  res.redirect("/");
};
