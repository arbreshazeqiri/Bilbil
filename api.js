import axios from "axios";

const BASE_URL = "http://192.168.2.2:3000";

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const searchUsers = async (searchInput) => {
  try {
    const response = await axios.post(`${BASE_URL}/search`, { searchInput });
    return response;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
};

const sendFriendRequest = async (userId, friendId) => {
  try {
    const response = await axios.post(`${BASE_URL}/sendFriendRequest`, {
      userId,
      friendId,
    });
    return response;
  } catch (error) {
    console.error("Error sending friend request:", error);
    throw error;
  }
};

const acceptFriendRequest = async (userId, friendId) => {
  try {
    const response = await axios.post(`${BASE_URL}/acceptFriendRequest`, {
      userId,
      friendId,
    });
    return response;
  } catch (error) {
    console.error("Error accepting friend request:", error);
    throw error;
  }
};

const removeFriendRequest = async (userId, friendId) => {
  try {
    const response = await axios.post(`${BASE_URL}/removeFriendRequest`, {
      userId,
      friendId,
    });
    return response;
  } catch (error) {
    console.error("Error removing friend:", error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const updateAvatar = async (userId, avatar) => {
  try {
    const response = await axios.post(`${BASE_URL}/updateAvatar`, {
      userId,
      avatar,
    });
    return response;
  } catch (error) {
    console.error("Error saving avatar:", error);
    throw error;
  }
};

const logMistake = async (userId, mistake) => {
  try {
    const response = await axios.post(`${BASE_URL}/logMistake`, {
      userId,
      mistake,
    });
    return response;
  } catch (error) {
    console.error("Error saving mistake:", error);
  }
};

const updateProgress = async (userId, progress) => {
  try {
    const response = await axios.post(`${BASE_URL}/updateProgress`, {
      userId,
      progress,
    });
    return response;
  } catch (error) {
    console.error("Error saving progress:", error);
  }
};

const addActivity = async (userId, type, description) => {
  try {
    const response = await axios.post(`${BASE_URL}/addActivity`, {
      userId,
      type,
      description,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding activity:", error);
    throw error;
  }
};

const getFriendsActivity = async (userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/getFriendActivity`, {
      userId,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching friend activities:", error);
    throw error;
  }
};

export {
  registerUser,
  loginUser,
  searchUsers,
  sendFriendRequest,
  acceptFriendRequest,
  removeFriendRequest,
  getUserById,
  updateAvatar,
  logMistake,
  updateProgress,
  addActivity,
  getFriendsActivity,
};
