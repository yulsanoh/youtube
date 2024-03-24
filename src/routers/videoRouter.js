import express from "express";
import { handleVideoWatch } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/:id").get(handleVideoWatch);

export default videoRouter;
