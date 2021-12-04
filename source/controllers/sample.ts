import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = "Sample Conttroller";

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Sample health check route called");

  return res.status(200).json({ message: "ping" });
};

export default { sampleHealthCheck };
