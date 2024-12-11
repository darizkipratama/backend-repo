import { Request, Response, NextFunction } from 'express';

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).send({ message: 'Unauthorized' });
    return;
  }

  if (token === "$impleTok3N") {
    next();
  } else {
    res.status(401).send({message: "Invalid Token"});
  }
};