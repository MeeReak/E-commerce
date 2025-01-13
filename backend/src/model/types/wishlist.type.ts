interface IWishlist {
  userId: string;
  productId?: string[];
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateWishlist extends Partial<IWishlist> {}

export { IWishlist, IUpdateWishlist };
