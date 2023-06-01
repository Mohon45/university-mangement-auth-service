import { Request, Response } from "express";
import { createUserServices } from "./users.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await createUserServices(req.body);
    res.status(201).json({
      status: "success",
      data: result,
      message: "successfully created User",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "faild to created User",
    });
  }
};

export default { createUser };
