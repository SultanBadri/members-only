const express = require("express");
const router = express.Router();
const {
  getIndexView,
  getSignUpForm,
  getLoginForm,
  getLoginFailForm,
  handleLogout,
  handleSignUp,
  handleLogin,
} = require("./../controllers/authController");
const { postMessage } = require("./../controllers/messageController");

// GET home page
router.get("/", getIndexView);

// GET and POST sign up form
router.get("/sign-up", getSignUpForm).post("/sign-up", handleSignUp);

// GET and POST login form
router
  .get("/login", getLoginForm)
  .get("/login-fail", getLoginFailForm)
  .post("/login", handleLogin);

// Handle logout
router.get("/logout", handleLogout);

// GET become member page

// GET post message page
router.get("/post-message", postMessage);

// GET become admin page

module.exports = router;
