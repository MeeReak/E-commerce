import mongoose, { Schema } from "mongoose";
import { ICategoryBlog } from "./types/category-blog.type";

const categoryBlogSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    blogId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
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

const categoryBlogModel = mongoose.model<ICategoryBlog>("CategoryBlog", categoryBlogSchema);

export default categoryBlogModel;
