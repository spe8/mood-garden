import express from "express";
import { router as v1Router } from "./index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});
app.use("/api/v1", v1Router);

export default app;
