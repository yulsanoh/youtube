import "./db.js";
import express from "express";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const PORT = 4000;

app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use("/static", express.static(__dirname + "/client"));
app.use("/", rootRouter);
app.use("/users/", userRouter);
app.use("/videos/", videoRouter);
console.log(__dirname);
app.listen(PORT, () =>
  console.log(`✅ Server is listening on port http://localhost:${PORT}`)
);

export default app;
