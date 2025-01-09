interface ICategoryBlog {
  _id?: string;
  name: string;
  blogId?: string[];
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateCategoryBlog {
  name?: string;
  blogId?: string[];
}

export { ICategoryBlog, IUpdateCategoryBlog };
