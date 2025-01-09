interface ICategoryProduct {
  _id?: string;
  name: string;
  productId?: string[];
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateCategoryProduct {
  name?: string;
  productId?: string[];
}

export { ICategoryProduct, IUpdateCategoryProduct };
