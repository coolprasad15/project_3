import dotenv from "dotenv";
import connectDB from "./db/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 7001, () => {
        console.log(`Server is running on PORT ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log(`MongoDB connection Failed`, err);
});