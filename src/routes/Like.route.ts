import { Router } from "express";
import LikeController from "../controllers/Like.controller";

const router = Router();

router.post("/create", LikeController.add);
router.delete("/remove", LikeController.remove);

export default router;
