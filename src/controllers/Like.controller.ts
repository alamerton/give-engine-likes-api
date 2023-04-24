import { Request, Response } from "express";
import Like from "../models/Like";

class LikeController {
  static async add(req: Request, res: Response) {
    const request = JSON.stringify(req.body);
    Like.create(request, (error) => {
      if (error) {
        res.sendStatus(500).json({ error });
      } else {
        res.sendStatus(201);
      }
    });
  }
  static async remove(req: Request, res: Response) {}
}

export default LikeController;
