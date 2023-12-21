import Axios from "axios";

const getAllUsers = () => {
    return Axios.get('/users')
}

const getUsers = (uid) => {
    return Axios.get('/users/:uid')
}
export const userService = {
    getAllUsers, getUsers
}