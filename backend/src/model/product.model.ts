import mongoose, { Schema } from "mongoose";
import { IProduct } from "./types/product.type";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    star: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    goodPoint: {
      type: Array,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    tag: {
      type: Array,
      required: true,
    },
    additionalInfo: {
      type: Array,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    updateAt: {
      type: Date,
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

const productModel = mongoose.model<IProduct>("Product", productSchema);

export default productModel;
