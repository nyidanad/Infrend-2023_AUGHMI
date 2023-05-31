import { AppDataSource } from "../data-source";
import { Vehicle } from "../entity/Vehicle";
import { Controller } from "./base.controller";

export class VehicleController extends Controller {
    repository = AppDataSource.getRepository(Vehicle);
}