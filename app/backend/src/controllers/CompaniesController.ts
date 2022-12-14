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

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const companies = await this.companiesService.getAll();

    return res.status(StatusCodes.OK).json(companies);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const company = await this.companiesService.getById(req.params.id);

    return res.status(StatusCodes.OK).json(company);
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    await this.companiesService.update(req.params.id, req.body);

    return res.status(StatusCodes.OK).send('Company successfully updated');
  };

  public remove = async (req: Request, res: Response): Promise<Response> => {
    await this.companiesService.remove(req.params.id);

    return res.status(StatusCodes.OK).send('Company successfully removed');
  };
}

export default new CompaniesController();
