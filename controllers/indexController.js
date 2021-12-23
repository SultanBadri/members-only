const Message = require("../models/messageModel");

exports.getIndexView = async (req, res, next) => {
  try {
    const messages = await Message.find()
      .sort([["timestamp", "descending"]])
      .populate()
      .exec();
    res.render("index", { user: req.user, messages: messages });
  } catch (err) {
    return next(err);
  }
};
