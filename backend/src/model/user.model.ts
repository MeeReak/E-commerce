import mongoose, { Schema } from "mongoose";
import { IUser } from "./types/user.type";

const userSchema = new Schema(
  {
    firstName:{
      type: String,
    },
    lastName:{
      type: String,
    },
    email:{
      type: String,
      required: true,
    },
    profile:{
      type: String,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    updateAt: {
      type: Date,
      default: null,
    },
  },
  {
    toJSON: {
      transform(_doc, ret: any) {
        delete ret.__v;
      },
    },
  }
);

const userModel = mongoose.model<IUser>("User", userSchema);

export default userModel;
