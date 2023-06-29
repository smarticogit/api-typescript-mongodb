import { Router } from "express";
import { ClientController } from "./controllers/ClientControllers";
import { ProductController } from "./controllers/ProductController";

const routes = Router();

routes.post("/clients", new ClientController().create);
routes.get("/clients", new ClientController().list);
routes.post("/products", new ProductController().create);
routes.get("/products", new ProductController().list);

export default routes;
