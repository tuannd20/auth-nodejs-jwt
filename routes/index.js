const homeRouter = require("./home");
const authRouter = require("./auth");
const bookRouter = require("./book");

function route(app) {
  app.use("/", homeRouter);
  app.use("/auth", authRouter);
  app.use("/book", bookRouter);
}

module.exports = route;
