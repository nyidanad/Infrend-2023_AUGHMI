import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/Customer"
import { Vehicle } from "./entity/Vehicle"
import { Rental } from "./entity/Rental"
import { Retrieve } from "./entity/Retrieve"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "infrend_feleves",
    synchronize: true,
    logging: true,
    entities: [Customer, Vehicle, Rental, Retrieve],
    migrations: [],
    subscribers: [],
})
