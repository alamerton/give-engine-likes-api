import { Router } from "express";
import LikeController from "../controllers/Like.controller";
import Like from "../models/Like";

const router = Router();

router.get("/", LikeController.getAll);
router.post("/add", LikeController.create);
router.post("/remove", LikeController.create);

export default router;
