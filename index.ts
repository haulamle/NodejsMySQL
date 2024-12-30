import express from "express";
import dotenv from "dotenv";
import { connection } from "./src/config/connect";
import studentRouter from "./src/routers/student";
import courseRouter from "./src/routers/course";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.DB_PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/student", studentRouter);
app.use("/courses", courseRouter);

connection.connect((err) => {
  if (err) {
    console.log(err);
    throw new Error("Error connecting to database");
  }

  console.log("Connected to database");

  app.listen(port, () => {
    if (err) {
      console.log(err);
      throw new Error("Error starting server");
    }

    console.log(`Server running on port ${port}`);
  });
});
