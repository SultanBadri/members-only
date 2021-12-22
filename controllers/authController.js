const User = require("../models/userModel");
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

exports.setIndexView = (req, res) => res.render("index");

exports.getSignUpForm = (req, res) => res.render("sign-up");

exports.getLoginForm = (req, res) => res.render("login");

// export.get

exports.handleLogout = (req, res) => {
  req.logout();
  res.redirect("/");
};
