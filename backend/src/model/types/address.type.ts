interface IAddress {
  userId?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  village?: string;
  district?: string;
  province?: string;
  commune?: string;
  street?: string;
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdate extends Partial<IAddress> {}

export { IAddress, IUpdate };
