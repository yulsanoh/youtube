import express from "express";
import { handleUserProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/:id").get(handleUserProfile);

export default userRouter;
