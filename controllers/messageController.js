const Message = require("../models/messageModel");

exports.getMessage = (req, res) => res.render("message-form");

exports.postMessage = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const message = await new Message({
      title: title,
      content: content,
      date: Date.now(),
      author: req.user.id,
    });
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
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
