import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import likeRoutes from "./routes/Like.route";

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use("/", likeRoutes);

const port = 5002;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server