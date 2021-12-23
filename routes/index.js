const express = require("express");
const router = express.Router();
const { getIndexView } = require("./../controllers/indexController");
const {
  getSignUpForm,
  getLoginForm,
  getLoginFailForm,
  handleLogout,
  postSignUp,
  handleLogin,
} = require("./../controllers/authController");
const {
  getMessage,
  postMessage,
} = require("./../controllers/messageController");
const {
  getAdminForm,
  postAdminForm,
} = require("./../controllers/adminController");

// GET home page
router.get("/", getIndexView);

// GET and POST sign up form
router.get("/sign-up", getSignUpForm).post("/sign-up", postSignUp);

// GET and POST login form
router
  .get("/login", getLoginForm)
  .get("/login-fail", getLoginFailForm)
  .post("/login", handleLogin);

// Handle logout
router.get("/logout", handleLogout);

// GET and POST message page
router.get("/message-form", getMessage).post("/message-form", postMessage);

// GET become admin page
router.get("/admin-form", getAdminForm).post("/admin-form", postAdminForm);

module.exports = router;
