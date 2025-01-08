interface ICategory {
  _id?: string;
  name: string;
  productId?: string[];
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateCategory {
  name?: string;
  productId?: string[];
}

export { ICategory, IUpdateCategory };
