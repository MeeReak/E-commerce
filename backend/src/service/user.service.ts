import UserRepository from "../repository/user.repository";

class UserService {
  private _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  async createUser(user: { name: string }) {
    try {
      this._userRepository.createUser(user);
    } catch (error: any) {
      throw error;
    }
  }
}

export default UserService;
