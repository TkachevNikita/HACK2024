import api from "./api";

export const signIn = async (payload: {login: string; password: string}) => {
    try {
        const response = await api.post('/auth/sign-in', { login: payload.login, password: payload.password });
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        localStorage.setItem('token', response.data.token);
        return response.data
    } catch (error) {
        console.error('Ошибка при авторизации:', error);
    }
}

export const signUp = async (payload: {login: string; password: string}) => {
    try {
        const response = await api.post('/auth/sign-up', { login: payload.login, password: payload.password });
        return response.data
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
    }
}

export const logOut = async () => {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
}