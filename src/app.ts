import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("It works!");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
