const { authJwt } = require("../middleware");
const jokecontroller = require("../controllers/joke.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/joke",
    [authJwt.verifyToken],
    jokecontroller.create
  );
  app.get(
    "/api/joke/get/:id",
    [authJwt.verifyToken],
    jokecontroller.findjoke
  );
  app.delete(
    "/api/joke/delete/:id",
    [authJwt.verifyToken],
    jokecontroller.deletejoke
  );
  app.put(
    "/api/joke/status/:id",
    [authJwt.verifyToken],
    jokecontroller.upstatus
  );

};