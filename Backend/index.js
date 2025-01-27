let Express = require("express");
let MongoDb = require("mongoose");
let Cors = require("cors");
const TodoRouter = require("./module/Todo.routes");
let App = Express();

App.use(Cors());
App.use(Express.json());

MongoDb.connect("mongodb://127.0.0.1:27017/?")
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((e) => {
    console.log("Database Failed To Connect!");
  });

// middleware

App.use("/api", TodoRouter);

App.listen(3000, () => {
  console.log("http://localhost:3000");
});
