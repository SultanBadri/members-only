const Message = require("../models/messageModel");

exports.getMessage = (req, res) => res.render("message-form");

exports.postMessage = (req, res, next) => {
  const { title, content } = req.body;
  const message = new Message({
    title: title,
    content: content,
    date: Date.now(),
    author: req.user,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

// exports.handleSignUp = async (req, res, next) => {
//   const { username, password } = req.body;
//   bcrypt.hash(password, 10, (err, hashedPassword) => {
//     const user = new User({
//       username: username,
//       password: hashedPassword,
//       isMember: true,
//       isAdmin: false,
//     }).save((err) => {
//       if (err) {
//         return next(err);
//       }
//       res.redirect("/");
//     });
//   });
// };
