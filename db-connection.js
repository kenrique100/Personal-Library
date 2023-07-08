const mongoose = require("mongoose");
const db = mongoose.connect(process.env.DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.set('useFindAndModify', false);

module.exports = db;
