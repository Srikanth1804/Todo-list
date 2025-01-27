let Mongoose = require("mongoose");

let WorkSchema = new Mongoose.Schema({
  Do: {
    type: String,
  },
});

let Work = Mongoose.model("Worklist", WorkSchema);

module.exports = Work;
