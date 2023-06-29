import express from "express";
import "dotenv/config";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(async () => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  const port = process.env.PORT_SERVER;
  return app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
