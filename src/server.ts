import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.database_atlas_url as string);
    console.log("Database is connected successfully");

    app.listen(config.port, () => {
      console.log(`Server is Running! port no. ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect Database!", error);
  }
}
main();
