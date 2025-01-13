import mongoose, { Schema } from "mongoose";
import { IWishlist } from "./types/wishlist.type";

const wishlistSchema = new Schema(
  {
    userId:{
      type: String,
      // ref: "User",
    },
    productId:{
      type: Array
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

const wishlistModel = mongoose.model<IWishlist>("Wishlist", wishlistSchema);

export default wishlistModel;
