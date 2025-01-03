import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_doc, ret: any) {
        // delete ret.password;
        delete ret.googleId;
        delete ret.__v;
      },
    },
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
