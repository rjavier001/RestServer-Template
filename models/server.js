const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    //Initializations
    this.app = express();
    this.port = process.env.PORT;
    this.userpath = "/api/users"; //NOTE: Users Endpoint

    //Middlewares
    this.middelwares();

    //Routes
    this.routes();
  }

  middelwares() {
    //CORS
    this.app.use(cors());

    //Body parse
    this.app.use(express.json());

    //Static files
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userpath, require("../routes/users.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on port: ", this.port);
    });
  }
}

module.exports = Server;
