import { Router } from 'express';
import UniversitiesController from '../controllers/UniversitiesController';

const universities = Router();

universities.post('/', UniversitiesController.create);

export default universities;
