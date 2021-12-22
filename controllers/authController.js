const User = require("../models/userModel");
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

exports.setIndexView = (req, res) => res.render("index");

exports.getSignUpForm = (req, res) => res.render("sign-up");

exports.getLoginForm = (req, res) => res.render("login");

exports.handleLogout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.handleSignUp = async (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

// app.post("/sign-up", (req, res, next) => {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//   }).save((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// });
