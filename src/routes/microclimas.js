import { Router} from 'express';
const router = Router();

import {createMicroclima, getMicroclima,getOneMicroclima, deleteMicroclima, updateMicroclima} from '../controllers/microclima.controller';

// /api/microclima/
router.post('/', createMicroclima);
router.get('/', getMicroclima);

//api/microclima/microclimaid
router.get('/:id', getOneMicroclima );
router.delete('/:id', deleteMicroclima);
router.put('/:id', updateMicroclima);

export default router; 