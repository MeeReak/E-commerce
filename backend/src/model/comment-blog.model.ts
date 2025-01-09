import mongoose, { Schema } from "mongoose";
import { ICommentBlog } from "./types/comment-blog.type";

const commentBlogSchema = new Schema(
  {
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    message: {
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

const commentBlogModel = mongoose.model<ICommentBlog>(
  "CommentBlog",
  commentBlogSchema
);

export default commentBlogModel;
