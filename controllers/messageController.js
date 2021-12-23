const Message = require("../models/messageModel");

exports.getMessage = (req, res) => res.render("message-form");

exports.postMessage = (req, res, next) => {
  const { title, content } = req.body;
  const message = new Message({
    title: title,
    content: content,
    date: Date.now(),
    author: req.user.id,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

exports.deleteMessage = async (req, res, next) => {
  const { messageId } = req.body;
  try {
    await Message.findByIdAndDelete(messageId);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};
