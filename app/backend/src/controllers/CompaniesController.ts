import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ICompaniesService from '../services/interfaces/ICompaniesService';
import { CompaniesService } from '../services/CompaniesService';

class CompaniesController {
  private readonly companiesService: ICompaniesService;

  constructor() {
    this.companiesService = new CompaniesService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const company = await this.companiesService.create(req.body);

    return res.status(StatusCodes.CREATED).json(company);
  };
}

export default new CompaniesController();
