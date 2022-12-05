import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';

const companies = Router();

companies.get('/', CompaniesController.getAll);
companies.post('/', CompaniesController.create);
companies.get('/:id', CompaniesController.getById);
companies.put('/:id', CompaniesController.update);

export default companies;