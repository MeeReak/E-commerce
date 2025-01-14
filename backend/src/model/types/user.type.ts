interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  createAt?: Date;
  updateAt?: Date;
}

interface IUpdateUser extends Partial<IUser> {}

export { IUser, IUpdateUser };
