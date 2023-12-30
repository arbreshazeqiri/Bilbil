import axios from 'axios';
import { BASE_URL } from '@env';

const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

const loginUser = async (user) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, user);
        return response;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

const searchUsers = async (searchInput) => {
    try {
        const response = await axios.post(`${BASE_URL}/search`, { searchInput });
        return response;
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
};

const sendFriendRequest = async (userId, friendId) => {
    try {
        const response = await axios.post(`${BASE_URL}/sendFriendRequest`, { userId, friendId });
        return response;
    } catch (error) {
        console.error('Error sending friend request:', error);
        throw error;
    }
};

const acceptFriendRequest = async (userId, friendId) => {
    try {
        const response = await axios.post(`${BASE_URL}/acceptFriendRequest`, { userId, friendId });
        return response;
    } catch (error) {
        console.error('Error accepting friend request:', error);
        throw error;
    }
};

const removeFriendRequest = async (userId, friendId) => {
    try {
        const response = await axios.post(`${BASE_URL}/removeFriendRequest`, { userId, friendId });
        return response;
    } catch (error) {
        console.error('Error removing friend:', error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/user/${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching user:', error);
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
};