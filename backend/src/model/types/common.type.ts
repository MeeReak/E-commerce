export interface IPaginated {
  page: number;
  perPage: number;
  totalRecord: number;
  totalPage: number;
}

export interface IFilter {
  page?: number;
  perPage?: number;
}
