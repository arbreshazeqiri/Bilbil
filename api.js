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

const searchUsers = async (searchInput, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/search`, { searchInput, userId });
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

const logActivity = async (userId, type, description) => {
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

const getFriends = async (userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/getFriends`, {
      userId,
    });
    return response.data.friends;
  } catch (error) {
    console.error("Error fetching friends:", error);
    throw error;
  }
};

const changePassword = async (userId, oldPassword, newPassword) => {
  try {
    const response = await axios.post(`${BASE_URL}/changePassword`, {
      userId,
      oldPassword,
      newPassword,
    });
    return response;
  } catch (error) {
    console.error("Error changing password:", error);
    throw error;
  }
};

const deleteAccount = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/deleteAccount/${userId}`);
    return response;
  } catch (error) {
    console.error("Error deleting account:", error);
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
  updateProgress,
  logMistake,
  logActivity,
  getFriends,
  changePassword,
  deleteAccount
};
