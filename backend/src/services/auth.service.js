import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../config/firebase.config.js";
import UserService from "./user.service.js";
import admin from "firebase-admin";

const auth = getAuth(app);

class AuthService {

  async userSignUp(name, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await UserService.createUser(name, email);

      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async userLogin(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Firebase ID token
      const idToken = await userCredential.user.getIdToken();

      return { user: userCredential.user , idToken};
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserFromSession() {
    const idToken = this.req.cookies.idToken;

    if (!idToken) {
      throw new Error("Session expired or not found");
    }

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const email = decodedToken.email;

    const user = await UserService.getUserByEmail(email);
    if (!user) throw new Error("User not found");

    return { userId: user._id };
  }

  async userLogout() {
    try {
      await signOut(auth);

      return { message: "Logout successful" };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new AuthService;