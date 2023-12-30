import { makeAutoObservable, action, observable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

class UserStore {
  @observable user = null;

  constructor() {
    makeAutoObservable(this);
    this.loadUser();
  }

  @action
  setUser(newUser) {
    this.user = { ...newUser };
    AsyncStorage.setItem("user", JSON.stringify(newUser));
    AsyncStorage.setItem("authToken", newUser.token);
  }

  @action
  async loadUser() {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        this.user = JSON.parse(user);
      }
    } catch (error) {
      console.error("Error loading user from AsyncStorage:", error);
    }
  }

  @action
  async getUser(_id) {
    try {
      const response = await axios.get(`http://100.81.43.159:3000/user/${_id}`);
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

  @action
  async logout() {
    await AsyncStorage.removeItem("authToken");
    await AsyncStorage.removeItem("user");
    runInAction(() => {
      this.user = null;
    });
  }
}

const userStore = new UserStore();
export default userStore;
