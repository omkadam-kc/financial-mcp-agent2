import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 3000 // Try for 3 seconds before giving up
    });
    console.log("✅ MongoDB Connected (External)");
  } catch (error) {
    console.warn("⚠️ Local MongoDB not found. Starting In-Memory MongoDB for Demo...");
    try {
      const mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      await mongoose.connect(mongoUri);
      console.log("✅ MongoDB Connected (In-Memory Fallback):", mongoUri);
    } catch (memError) {
      console.error("❌ Failed to start In-Memory MongoDB:", memError);
      process.exit(1);
    }
  }
};

export default connectDB;
