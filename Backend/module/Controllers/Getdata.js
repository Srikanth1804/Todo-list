let Work = require("../../model/Todo.model");

module.exports = (req, res) => {
  Work.find({})
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Data Getted Successfully!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "Data Failed To Get!",
      });
    });
};
