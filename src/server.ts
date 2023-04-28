import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import likeRoutes from "./routes/Like.route";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", likeRoutes);

const port = 5002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
