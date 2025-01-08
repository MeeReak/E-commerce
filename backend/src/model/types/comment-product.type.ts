interface IComment {
  _id?: string;
  productId: string;
  comment: string;
  name: string;
  star: number;
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateComment extends Partial<IComment> {}

export { IComment, IUpdateComment };
