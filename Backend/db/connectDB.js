import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.set("strictQuery",false)
  mongoose
    .connect("mongodb://localhost:27017/ev-track" ).then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
