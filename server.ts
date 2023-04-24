import express, { Express, Request, Response } from 'express';
import cors from "cors";
import bodyParser from "body-parser";
// import userRoutes from "./routes/User.route";

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use("/users", userRoutes);
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });
const port = 5002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
