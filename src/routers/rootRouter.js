import express from "express";
import { handleHome } from "../controllers/videoController";
import { handleGetSignUp, handleLogin } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.route("/").get(handleHome);
rootRouter.route("/login").get(handleLogin);
rootRouter.route("/signup").get(handleGetSignUp);

export default rootRouter;
