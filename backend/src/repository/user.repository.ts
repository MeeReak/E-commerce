class UserRepository {
  async createUser(data: { name: string }) {
    try {
      console.log("User created successfully", data);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}

export default UserRepository;
