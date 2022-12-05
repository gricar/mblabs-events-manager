import { Router } from 'express';
import UniversitiesController from '../controllers/UniversitiesController';

const universities = Router();

universities.get('/', UniversitiesController.getAll);
universities.post('/', UniversitiesController.create);

export default universities;
