import { Router } from "express";
import LikeController from "../controllers/Like.controller";
import Like from "../models/Like";

const router = Router();

router.post("/add", LikeController.add);
router.post("/remove", LikeController.remove);

export default router;
