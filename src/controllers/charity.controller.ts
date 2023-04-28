import { Request, Response } from "express";
import Charity from "../models/Charity";

class CharityController {
  static async get(req: Request, res: Response) {
    Charity.getAll((error, charities) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.send({ charities });
      }
    });
  }
}

export default CharityController;
