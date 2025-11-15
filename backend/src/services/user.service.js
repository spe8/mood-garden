import User from "../models/user.js";

class UserService {
  async createUser(name, email) {
    try {
      const checkUser = await this.getUserByEmail(email);
      if (checkUser) {
        throw new Error("User already exists");
      }
      const newUser = new User({ name, email });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email) {
    const user = await User.findOne({ email: email });
    return user;
  }
}

export default new UserService();
