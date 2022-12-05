import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUniversitiesService from '../services/interfaces/IUniversitiesService';
import { UniversitiesService } from '../services/UniversitiesService';

class UniversitiesController {
  private readonly universitiesService: IUniversitiesService;

  constructor() {
    this.universitiesService = new UniversitiesService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const university = await this.universitiesService.create(req.body);

    return res.status(StatusCodes.CREATED).json(university);
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const universities = await this.universitiesService.getAll();

    return res.status(StatusCodes.OK).json(universities);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const university = await this.universitiesService.getById(req.params.id);

    return res.status(StatusCodes.OK).json(university);
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    await this.universitiesService.update(req.params.id, req.body);

    return res.status(StatusCodes.OK).send('University successfully updated');
  };
}

export default new UniversitiesController();
