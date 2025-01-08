import mongoose, { Schema } from "mongoose";
import { IBlog } from "./types/blog.type";

const blogSchema = new Schema(
  {
    images: {
      type: Array,
      required: true,
    },
    commentId: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description1: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    description3: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
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

const blogModel = mongoose.model<IBlog>("Blog", blogSchema);

export default blogModel;
