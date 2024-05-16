import express, { json, urlencoded } from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import connectDB from "./db/db";
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

connectDB();

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});