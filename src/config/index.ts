import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_local_url: process.env.DATABASE_LOCAL_URL,
  database_atlas_url: process.env.DATABASE_ATLAS_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
};
