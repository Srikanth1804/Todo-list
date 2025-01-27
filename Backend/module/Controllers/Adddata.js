let Work = require("../../model/Todo.model");

module.exports = (req, res) => {
  let { Task } = req.body;

  Work.create({
    Do: Task,
  })
    .then((data) => {
      res.json({
        status: true,
        info: data,
        msg: "Data Created Successfully!",
      });
    })
    .catch((e) => {
      res.json({
        status: false,
        info: e,
        msg: "Data Failed To Create!",
      });
    });
};
