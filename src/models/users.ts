import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    gender: "Erkek" | "Kadın";
    birthDate: Date;
    phoneNumber: string;
    address: string;
    role: "student" | "teacher" | "admin";
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ["Erkek", "Kadın"],
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        required: true,
    },
});

const user = model<IUser>("User", userSchema);
export default user;