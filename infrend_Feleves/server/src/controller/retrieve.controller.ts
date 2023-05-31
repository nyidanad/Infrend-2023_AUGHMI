import { AppDataSource } from "../data-source";
import { Retrieve } from "../entity/Retrieve";
import { Controller } from "./base.controller";

export class RetrieveController extends Controller {
    repository = AppDataSource.getRepository(Retrieve);
}