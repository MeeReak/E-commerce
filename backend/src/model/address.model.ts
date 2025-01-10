import mongoose, { Schema } from "mongoose";
import { IAddress } from "./types/address.type";

const addressSchema = new Schema(
  {
    userId: {
      type: String,
      // ref: "User",
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    companyName: {
      type: String,
    },
    village: {
      type: String,
    },
    district: {
      type: String,
    },
    province: {
      type: String,
    },
    commune: {
      type: String,
    },
    street: {
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

const addressModel = mongoose.model<IAddress>(
  "Address",
  addressSchema
);

export default addressModel;
