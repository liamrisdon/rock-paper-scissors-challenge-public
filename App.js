import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const port = process.env.PORT;

import { indexRouter } from "./routes/indexRouter.js";
import { gameRouter } from "./routes/gameRouter.js";
import { resultRouter } from "./routes/resultRouter.js";


app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/game", gameRouter);
app.use("/result", resultRouter);


const server = app.listen(port, () => {
    const port = server.address().port;
    console.log(`listening at http://localhost:${port}`);
});


export default server;