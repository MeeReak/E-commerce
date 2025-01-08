interface IBlog {
  _id?: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  images: string[];
  tags: string[];
  userId: string;
  commentId?: string[];
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateBlog extends Partial<IBlog> {}

interface IBlogQueryParams {
  page?: number;
  perPage?: number;
  search?: string;
  date?: boolean;
}

interface IPaginatedBlog {
  page: number;
  perPage: number;
  totalRecord: number;
  totalPage: number;
}

export { IBlog, IUpdateBlog, IBlogQueryParams, IPaginatedBlog };
