import { Router} from 'express';
const router = Router();

import {createPlanta, getPlanta} from '../controllers/planta.controller';

// /api/planta/
router.post('/', createPlanta);
router.get('/', getPlanta);

/*/ /api/planta/plantaid
router.get('/:id', getOnePlanta);
router.delete('/:id', deletePlanta);
router.put('/:id', updatePlanta);*/


export default router; 