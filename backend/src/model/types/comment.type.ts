export interface IComment {
  productId: string;
  comment: string;
  name: string;
  star: number;
  createAt?: Date;
  updateAt?: Date;
}

export interface IUpdateComment{
  star: number;
  comment: string;
}
