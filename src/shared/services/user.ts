import api from "./api";

export const getUserInfo = async () => {
    try {
        const response = await api.get('/auth/register',);
        return response.data
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
    }
}