import { Router } from "express";
import LikeController from "../controllers/Like.controller";

const router = Router();

router.post("/", LikeController.add);
router.post("/getLikeByUserId", LikeController.getLikeByUserId)
router.delete("/", LikeController.remove);

export default router;
