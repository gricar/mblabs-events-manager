import { Router } from 'express';
import UniversitiesController from '../controllers/UniversitiesController';

const universities = Router();

universities.get('/', UniversitiesController.getAll);
universities.post('/', UniversitiesController.create);
universities.get('/:id', UniversitiesController.getById);
universities.put('/:id', UniversitiesController.update);
universities.delete('/:id', UniversitiesController.remove);

export default universities;
