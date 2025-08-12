import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("conn");
  } catch (error) {
    console.log("DB connection error: ", error);
  }
};

export default connectDB;
