import { Router } from 'express';
import UniversitiesController from '../controllers/UniversitiesController';

const universities = Router();

universities.get('/', UniversitiesController.getAll);
universities.post('/', UniversitiesController.create);
universities.get('/:id', UniversitiesController.getById);

export default universities;
