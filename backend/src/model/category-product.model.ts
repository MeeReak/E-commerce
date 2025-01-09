import mongoose, { Schema } from "mongoose";
import { ICategoryProduct } from "./types/category-product.type";

const categoryProductSchema = new Schema(
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

const categoryProductModel = mongoose.model<ICategoryProduct>(
  "CategoryProduct",
  categoryProductSchema
);

export default categoryProductModel;
