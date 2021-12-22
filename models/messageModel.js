const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: String, ref: "User", required: true },
});

// Export model
exports default mongoose.model("Message", MessageSchema);
