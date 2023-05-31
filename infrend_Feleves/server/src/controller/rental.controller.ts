import { AppDataSource } from "../data-source";
import { Rental } from "../entity/Rental";
import { Controller } from "./base.controller";

export class RentalController extends Controller {
    repository = AppDataSource.getRepository(Rental);
}