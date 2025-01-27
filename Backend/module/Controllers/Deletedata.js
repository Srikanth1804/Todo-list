let Work = require("../../model/Todo.model");

module.exports = (req, res) => {
  let { id } = req.params;

  Work.findByIdAndDelete(id)
    .then((data) => {
      res.json({
        status: true,
        msg: "Data Deleted!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        msg: "Data Failed To Delete!",
      });
    });
};
