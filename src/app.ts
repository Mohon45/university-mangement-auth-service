import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoutes from "./app/modules/users/users.route";
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routus
app.use("/api/v1/users/", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json("University management Server Running!");
});

export default app;
