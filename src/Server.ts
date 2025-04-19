import express, { NextFunction, Request, Response } from "express";
import employeesRouter from "./api/empl/Employee.route";
import reportsRouter from "./api/reports/Reports.route";

const port = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.use("/employees", employeesRouter);

    this.app.use("/reports", reportsRouter);

    this.app.listen(port, () => {
      console.log("Listening port " + port);
    });
  }
}

new Server().startServer();
