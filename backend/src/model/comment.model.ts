import mongoose, { Schema } from "mongoose";
import { IComment } from "./types/comment.type";

const commentSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    name: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
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

const commentModel = mongoose.model<IComment>("Comment", commentSchema);

export default commentModel;
