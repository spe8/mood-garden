import AuthController from "../controllers/auth.controller.js";
import express from "express";

const AuthRouter = express.Router();

AuthRouter.post("/signup", async (req, res, next) => {
  try {
    await AuthController.userSignUp(req, res);
  } catch (error) {
    next(error);
  }
});

AuthRouter.post("/login", async (req, res, next) => {
  try {
    await AuthController.userLogin(req, res);
  } catch (error) {
    next(error);
  }
});

export default AuthRouter;
