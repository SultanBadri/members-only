const User = require("../models/userModel");
const passport = require("passport");
const bcrypt = require("bcryptjs");

exports.getSignUpForm = (req, res) => res.render("sign-up");

exports.postSignUp = async (req, res, next) => {
  const { username, password, confirm } = req.body;
  if (confirm !== password) {
    res.render("sign-up", {
      username,
      error: "Passwords must match!",
    });
  }
  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      res.render("sign-up", { error: "Username already taken." });
    }

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      const user = await new User({
        username,
        password: hashedPassword,
        isMember: true,
        isAdmin: false,
      });
    });
    res.redirect("/login");
  } catch (err) {
    return next(err);
  }
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
