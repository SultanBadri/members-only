const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  member: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
  member_since: { type: Date, default: Date.now },
});

// Export model
module.exports = mongoose.model("User", UserSchema);
