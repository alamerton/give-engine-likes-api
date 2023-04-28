"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Like_controller_1 = __importDefault(require("../controllers/Like.controller"));
const router = (0, express_1.Router)();
router.post("/", Like_controller_1.default.add);
router.post("/getLikeByUserId", Like_controller_1.default.getLikeByUserId);
router.delete("/", Like_controller_1.default.remove);
exports.default = router;
