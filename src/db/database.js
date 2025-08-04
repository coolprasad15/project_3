import mongoose from "mongoose";
import { DB_NAME } from "../constance.js";

const connectDB = async () => {
    try {
        const constatntInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`Database connected successfully || DB HOST : ${constatntInstance.connection.host}`); 
    } catch (error) {
        console.log("Database connection Failed!", error);
        process.exit(1);
    }
}

export default connectDB;