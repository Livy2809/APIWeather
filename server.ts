import express, { Request, Response } from "express";

const app = express();
const API_KEY = "e52356f953ee476aa71131711240602";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/test", (req: Request, res: Response) => {
    res.send("Coucou, le server fonctionne");
})

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'execution sur le port ${PORT}`)
})
