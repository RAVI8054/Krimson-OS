import { api } from './api';

export const userService = {
    createUser: async (userData) => {
        return await api.post('/admin/users', userData);
    },

    getAllUsers: async () => {
        return await api.get('/admin/users');
    },
};
