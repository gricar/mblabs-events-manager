import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';
import auth from '../middlewares/auth';

const companies = Router();

companies.post('/', CompaniesController.create);
companies.use(auth);
companies.get('/', CompaniesController.getAll);
companies.get('/:id', CompaniesController.getById);
companies.put('/:id', CompaniesController.update);
companies.delete('/:id', CompaniesController.remove);

export default companies;
