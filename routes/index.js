const express = require("express");
const router = express.Router();
const {
  setIndexView,
  getSignUpForm,
  getLoginForm,
  handleLogout,
} = require("./../controllers/authController");
// const {} = require("./../controllers/messageController");

// GET home page.
router.get("/", setIndexView);

// GET sign up page
router.get("/sign-up", getSignUpForm);

// POST sign up user
router.post(/"sign-up", handleSignUp);

// GET login page
router.get("/login", getLoginForm);

// GET logout page
router.get("/logout", handleLogout);

// GET become member page

// GET post message page

// GET become admin page

module.exports = router;
