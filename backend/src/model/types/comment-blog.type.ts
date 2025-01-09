interface ICommentBlog {
  _id?: string;
  blogId: string;
  message: string;
  name: string;
  email: string;
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateCommentBlog extends Partial<ICommentBlog> {}

export { ICommentBlog, IUpdateCommentBlog };
