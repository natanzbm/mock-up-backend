import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

appRoutes(app);

app.get("/", (request: Request, response: Response) => {
  response.status(200).json({
    message: "Funcionou :)",
  });
});

app.use(errorMiddleware);

app.listen(3000);
