import express, {json} from 'express';
import morgan from 'morgan';

// Importing Routes
import microclimaRoutes from './routes/microclimas';
import cultivoRoutes from './routes/cultivos';
import plantaRoutes from './routes/plantas';
import sensoresRoutes from './routes/sensores';
import regdatsensRoutes from './routes/registrodatossensor';
import contalertaRoutes from './routes/contadoralertas';
import actuadoresRoutes from './routes/actuadores';


// Initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/microclima',microclimaRoutes);
app.use('/api/planta',plantaRoutes);
app.use('/api/cultivo', cultivoRoutes);
app.use('/api/sensor', sensoresRoutes);
app.use('/api/registrosensor', regdatsensRoutes);
app.use('/api/contador', contalertaRoutes);
app.use('/api/actuadores', actuadoresRoutes);


export default app; 