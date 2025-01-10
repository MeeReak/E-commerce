interface ICategoryBlog {
  _id?: string;
  name: string;
  blogId?: string[];
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateCategoryBlog extends Partial<ICategoryBlog> {}

export { ICategoryBlog, IUpdateCategoryBlog };
