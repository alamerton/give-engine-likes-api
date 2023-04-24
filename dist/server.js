"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// import userRoutes from "./routes/User.route";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// app.use("/users", userRoutes);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const port = 5002;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
