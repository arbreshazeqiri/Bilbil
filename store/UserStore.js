import { makeAutoObservable, runInAction } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
    this.loadUser();
  }

  setUser(newUser) {
    this.user = newUser;
    AsyncStorage.setItem('user', JSON.stringify(newUser));
    AsyncStorage.setItem('authToken', JSON.stringify(newUser.token));
  }

  async loadUser() {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
      }
    } catch (error) {
      console.error('Error loading user from AsyncStorage:', error);
    }
  }

  async getUser(_id) {
    try {
      const response = await axios.get(`http://100.81.43.159:3000/user/${_id}`);
      const userData = response.data.user;
      return userData
    } catch (error) {
      console.error('Error fetching user from API:', error);
    }
  }

  logout() {
    this.user = null;
    AsyncStorage.removeItem('user');
  }
}

const userStore = new UserStore();
export default userStore;
