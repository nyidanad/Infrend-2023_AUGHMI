import { AppDataSource } from "../data-source";
import { Customer } from "../entity/Customer";
import { Controller } from "./base.controller";

export class CustomerController extends Controller {
    repository = AppDataSource.getRepository(Customer);
}