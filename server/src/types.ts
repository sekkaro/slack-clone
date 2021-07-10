import { Request, Response } from "express";
import { createUserLoader } from "./utils/createUserLoader";

export type MyContext = {
  req: Request;
  res: Response;
  user: {
    id: number;
  };
  userLoader: ReturnType<typeof createUserLoader>;
};
