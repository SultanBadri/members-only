const Message = require("../models/messageModel");

exports.getIndexView = async (req, res, next) => {
  try {
    const messages = await Message.find()
      .sort([["date", "descending"]])
      .populate("author");
    res.render("index", { user: req.user, messages });
  } catch (err) {
    return next(err);
  }
};
