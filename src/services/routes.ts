import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { GetAllCategoriesController } from "../controllers/GetAllCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);

export { routes };