import api from "./api";




const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const signIn = async (payload: {username: string, password: string}) => {
    try {
        const response = await api.post('/auth/jwt/login', payload, config);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data?.access_token}`;
        localStorage.setItem('token', response?.data.access_token);
        return response.data
    } catch (error) {
        console.error('Ошибка при авторизации:', error);
    }
}

export const signUp = async (payload: {username: string, email: string; password: string}) => {
    try {
        const response = await api.post('/auth/register', payload);
        return response.data
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
    }
}

export const logOut = async () => {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
}