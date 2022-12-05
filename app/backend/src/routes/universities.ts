import { Router } from 'express';
import UniversitiesController from '../controllers/UniversitiesController';
import auth from '../middlewares/auth';

const universities = Router();

universities.post('/', UniversitiesController.create);
universities.use(auth);
universities.get('/', UniversitiesController.getAll);
universities.get('/:id', UniversitiesController.getById);
universities.put('/:id', UniversitiesController.update);
universities.delete('/:id', UniversitiesController.remove);

export default universities;
