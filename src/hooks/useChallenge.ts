import { getRequest, postRequest } from "@/lib/fetch";

export const useChallenge = () => {
    const fetchAllQuestions = async (name, sort, page) => {
        const res = await getRequest({
            endPoint: `/api/challenge?name=${name}&page=${page}&limit=15&sort=${sort}`,
        });
        return res;
    };

    const fetchQuestionById = async (id) => {
        const res = await getRequest({
            endPoint: `/api/challenge/question-detail?questionId=${id}`,
        });
        return res;
    };

    const editQuestion = async (data) => {
        const res = await postRequest({
            endPoint: "/api/challenge/question-detail/edit",
            isFormData: false,
            formData: data,
        });
        return res;
    }

    const deleteQuestion = async (data) => {
        const res = await postRequest({
            endPoint: "/api/challenge/question-detail/delete",
            isFormData: false,
            formData: data,
        });
    }

    const addQuestion = async (data) => {
        const res = await postRequest({
            endPoint: "/api/challenge/question-detail/add",
            isFormData: false,
            formData: data,
        });
        return res;
    }
    return {
        fetchAllQuestions,
        fetchQuestionById,
        editQuestion,
        deleteQuestion,
        addQuestion,
    }

}