import config from "../../../config/index";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import { generateUserId } from "./users.utils";

export const createUserServices = async (
  user: IUser
): Promise<IUser | null> => {
  // auto genaretor incremental id
  const id = await generateUserId();
  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createUser = await User.create(user);
  return createUser;
};
