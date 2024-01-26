import api from "../utils/api";

// Get All Users 
const getAllUsers = async () => {
    const response = await api().get('/');
    return response.data;
};

// Get Single Users
const getSingleUser = async (id) => {
    const response = await api().get(`/getUser/${id}`);
    return response.data;
};

// Update User
const updateUser = async (id, userData) => {
    const response = await api().put(`/updateUser/${id}`, userData);
    return response.data;
};

// Delete  User
const deleteUser = async (id) => {
    const response = await api().delete(`/deleteUser/${id}`);
    return response.data;
};

// Create New User
const createUser = async (userData) => {
    const response = await api().post(`/createUser`, userData);
    return response.data;
};




const userService = {
    getAllUsers, getSingleUser, updateUser, deleteUser, createUser
};

export default userService;