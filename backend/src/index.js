import express from "express";
import AuthRouter from "./routes/auth.router.js";

const router = express.Router();

router.use("/auth", AuthRouter);

export { router };
