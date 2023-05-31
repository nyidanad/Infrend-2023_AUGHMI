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

    router.get('/rentals', vehicleController.getAll);
    router.get('/rentals/:id', vehicleController.getOne);
    router.post('/rentals', vehicleController.create);
    router.put('/rentals', vehicleController.update);
    router.delete('/rentals/:id', vehicleController.delete);

    const retrieveController = new RetrieveController();

    router.get('/retrieves', vehicleController.getAll);
    router.get('/retrieves/:id', vehicleController.getOne);
    router.post('/retrieves', vehicleController.create);
    router.put('/retrieves', vehicleController.update);
    router.delete('/retrieves/:id', vehicleController.delete);

    return router;
}