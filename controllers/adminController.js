require("dotenv").config();

exports.getAdminForm = (req, res) => res.render("admin-form");

exports.handleAdminForm = async (req, res, next) => {
  const { code } = req.body;
  if (code !== process.env.ADMIN_CODE) {
    res.render("admin-form", { error: "Invalid code!" });
  } else {
    try {
      const updated = await User.findByIdAndUpdate(req.user.id, {
        isAdmin: true,
      });
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  }
};
