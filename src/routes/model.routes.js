import { Router } from 'express';
import { fetchAndSaveCountries } from '../controllers/model.controller.js';
import { authMiddlewareAdmin, authMiddleware } from '../middleware/middleware_verify.js'

const router = Router();

router.get('/paises/fetch', fetchAndSaveCountries);

export default router;
