const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  date: { type: Date, default: Date.now },
  body: { type: String, required: true },
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
