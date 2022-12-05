import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';

const companies = Router();

companies.post('/', CompaniesController.create);

export default companies;
