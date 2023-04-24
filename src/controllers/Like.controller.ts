import { Request, Response } from "express";
import Like from "../models/Like";

class LikeController {
  static async add(req: Request, res: Response) {
    const request = JSON.stringify(req.body);
    Like.create(request, (error) => {
      if (error) {
        res.status(500).json({ error }); // it gets funny about this
      } else {
        res.sendStatus(201);
      }
    });
  }
  static async remove(req: Request, res: Response) {
    const request = JSON.stringify(req.body);
    Like.remove(request, (error) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.sendStatus(200);
      }
    });
  }
}

export default LikeController;
