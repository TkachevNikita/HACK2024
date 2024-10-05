import api from "./api";

export const getQuestions = async (caseId: number) => {
    try {
        const response = await api.get(`/api/question/?case_id=${caseId}`,);
        return response.data
    } catch (error) {
        console.error('Ошибка:', error);
    }
}