import bodyParser from 'body-parser';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import { routes } from './routes';


const app = express();
app.use(cors());
app.use(json({limit: '50mb'}));
app.use(routes);


//  Se indica el puerto de escucha 
const PORT = process.env.PORT || 3333
app.listen(PORT, ()=> console.log(`Server is running in PORT ${PORT}.`));