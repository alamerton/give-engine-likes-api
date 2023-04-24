import { Router } from "express";
import LikeController from "../controllers/Like.controller";

const router = Router();

router.post("/add", LikeController.add);
router.post("/remove", LikeController.remove);

export default router;
