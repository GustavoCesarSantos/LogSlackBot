import { config } from "dotenv";
import express, { Request, Response } from "express";

import { sendMessageToChannel } from "./bot";

config();
const app = express();
app.use(express.json());

app.get("/", async (request: Request, response: Response) => {
  try {
    await sendMessageToChannel("TESTE");
    response.status(204).end();
  } catch (error) {
    response.status(500).end();
  }
});

app.listen("3000", () => console.log("Server on in port: 3000"));
