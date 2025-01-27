let Express = require("express");
const Adddata = require("./Controllers/Adddata");
const Getdata = require("./Controllers/Getdata");
const Updatedata = require("./Controllers/Updatedata");
const Deletedata = require("./Controllers/Deletedata");

let TodoRouter = Express.Router();

TodoRouter.post("/adddata", Adddata);
TodoRouter.get("/getdata", Getdata);
TodoRouter.put("/updatedata/:id", Updatedata);
TodoRouter.delete("/deletedata/:id", Deletedata);

module.exports = TodoRouter;
