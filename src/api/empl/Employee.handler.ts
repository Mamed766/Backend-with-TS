import { Response, Request, NextFunction } from "express";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const allEmployees = [{ name: "Mamed" }];
    res.json(allEmployees);
  } catch (error) {
    next(error);
  }
}

export async function getById(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const allEmployees = [{ name: "Mamed with id:" + id }];
    res.json(allEmployees);
  } catch (error) {
    next(error);
  }
}
