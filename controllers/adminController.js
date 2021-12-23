require("dotenv").config();
const User = require("../models/userModel");

exports.getAdminForm = (req, res) => res.render("admin-form");

exports.postAdminForm = async (req, res, next) => {
  const { passcode } = req.body;
  if (passcode !== process.env.ADMIN_CODE) {
    res.render("admin-form", { error: "Invalid code!" });
  } else {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        isAdmin: true,
      });
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  }
};
