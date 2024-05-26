import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserById } from "../api";

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(newUser) {
    runInAction(() => {
      this.user = { ...newUser };
    });
    AsyncStorage.setItem("user", JSON.stringify(newUser));
    AsyncStorage.setItem("authToken", newUser.token);
    this.loadUser();
  }

  async loadUser() {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        runInAction(() => {
          this.user = JSON.parse(user);
        });
      }
    } catch (error) {
      console.error("Error loading user from AsyncStorage:", error);
    }
  }

  async getUser(_id) {
    try {
      const response = await getUserById(_id);
      const userData = response.data.user;

      if (!userData) {
        throw new Error("User data not found");
      }

      return userData;
    } catch (error) {
      console.error("Error fetching user from API:", error);
      throw error;
    }
  }

  async logout() {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("authToken");
    runInAction(() => {
      this.user = null;
    });
  }
}

const userStore = new UserStore();
export default userStore;
