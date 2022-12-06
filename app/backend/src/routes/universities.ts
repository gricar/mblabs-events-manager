import { Router } from 'express';
import UniversitiesController from '../controllers/UniversitiesController';
import auth from '../middlewares/auth';
import validateUniversity from '../middlewares/validateUniversity';

const universities = Router();

universities.post('/', validateUniversity, UniversitiesController.create);
universities.use(auth);
universities.get('/', UniversitiesController.getAll);
universities.get('/:id', UniversitiesController.getById);
universities.put('/:id', validateUniversity, UniversitiesController.update);
universities.delete('/:id', UniversitiesController.remove);

export default universities;
