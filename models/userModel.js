const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isMember: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  memberSince: { type: Date, default: Date.now },
});

// Export model
module.exports = mongoose.model("User", UserSchema);
