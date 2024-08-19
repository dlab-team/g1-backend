import { Router } from 'express';
import { fetchAndSaveCountries } from '../controllers/model.controller.js';

const router = Router();

router.get('/paises/fetch', fetchAndSaveCountries);

export default router;
