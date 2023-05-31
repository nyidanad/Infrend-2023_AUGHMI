import express from 'express';
import { AppDataSource } from "./data-source"
import { getRoutes } from "./routes";

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(express.json());
    app.use('/api', getRoutes());

    app.listen(3000, () => {
        console.log('Listening on port 3000 ...');
    });
}).catch(error => console.log(error))