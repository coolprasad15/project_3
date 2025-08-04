import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            index: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            toLowerCase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            toLowerCase: true,
            trim: true
        },
        avatar: {
            type: String,
            required: true
        },
        coverImage: {
            type: String
        },
        password: {
            type: String,
            required: [true, "Password is required!"]
        }
    }, 
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);