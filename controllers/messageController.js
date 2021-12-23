const Message = require("../models/messageModel");

exports.getMessage = (req, res) => res.render("message-form");

exports.postMessage = (req, res) => {
  const { title, content } = req.body;
  const message = new Message({
    title: title,
    content: content,
    date: Date.now(),
    author: req.user,
  }).save((err, message) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
