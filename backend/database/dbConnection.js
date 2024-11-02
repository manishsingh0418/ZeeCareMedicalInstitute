import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error(`Error connecting to database: ${err}`);
      process.exit(1); // Exit on connection failure
    });
};
