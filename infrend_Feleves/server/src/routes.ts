import express from 'express';
import { CustomerController } from './controller/customer.controller';
import { VehicleController } from './controller/vehicle.controller';
import { RentalController } from './controller/rental.controller';
import { RetrieveController } from './controller/retrieve.controller';

export function getRoutes() {
    const router = express.Router();

    const customerController = new CustomerController();

    router.get('/customers', customerController.getAll);
    router.get('/customers/:id', customerController.getOne);
    router.post('/customers', customerController.create);
    router.put('/customers', customerController.update);
    router.delete('/customers/:id', customerController.delete);

    const vehicleController = new VehicleController();

    router.get('/vehicles', vehicleController.getAll);
    router.get('/vehicles/:id', vehicleController.getOne);
    router.post('/vehicles', vehicleController.create);
    router.put('/vehicles', vehicleController.update);
    router.delete('/vehicles/:id', vehicleController.delete);

    const rentalController = new RentalController();

    router.get('/rentals', rentalController.getAll);
    router.get('/rentals/:id', rentalController.getOne);
    router.post('/rentals', rentalController.create);
    router.put('/rentals', rentalController.update);
    router.delete('/rentals/:id', rentalController.delete);

    const retrieveController = new RetrieveController();

    router.get('/retrieves', retrieveController.getAll);
    router.get('/retrieves/:id', retrieveController.getOne);
    router.post('/retrieves', retrieveController.create);
    router.put('/retrieves', retrieveController.update);
    router.delete('/retrieves/:id', retrieveController.delete);

    return router;
}