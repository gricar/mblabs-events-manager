import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';
import auth from '../middlewares/auth';
import validateCompany from '../middlewares/validateCompany';

const companies = Router();

companies.post('/', validateCompany, CompaniesController.create);
companies.use(auth);
companies.get('/', CompaniesController.getAll);
companies.get('/:id', CompaniesController.getById);
companies.put('/:id', validateCompany, CompaniesController.update);
companies.delete('/:id', CompaniesController.remove);

export default companies;
