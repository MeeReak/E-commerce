import mongoose, { Schema } from "mongoose";
import { ICategory } from "./types/category.type";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
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

const categoryModel = mongoose.model<ICategory>("Category", categorySchema);

export default categoryModel;
