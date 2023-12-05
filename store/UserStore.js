import { makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  logout() {
    this.user = null;
    AsyncStorage.removeItem('user');
  }
}

const userStore = new UserStore();
export default userStore;
