import api from "./api";

export const getCommands = async () => {
    try {
        const response = await api.get('/api/commands/',);
        return response.data
    } catch (error) {
        console.error('Ошибка:', error);
    }
}