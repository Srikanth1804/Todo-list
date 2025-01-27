let Work = require("../../model/Todo.model");

module.exports = (req, res) => {
  let { id } = req.params;
  let { Task } = req.body;
  Work.findByIdAndUpdate(id, { Do: Task })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Data Updated Successfully!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "Data Failed To Update!",
      });
    });
};
