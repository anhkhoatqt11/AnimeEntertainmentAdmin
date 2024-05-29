import { getRequest, postRequest } from "@/lib/fetch";


export const useCredentials = () => {
    const createNewCredential = async (data) => {
        const res = await postRequest({
            endPoint: "/api/credentials/add",
            isFormData: false,
            formData: data,
        });
        return res;
    }

    const checkIfUserExists = async (data) => {
        const res = await postRequest({
            endPoint: "/api/credentials/check",
            isFormData: false,
            formData: data,
        });
        return res;
    }

    const fetchAllCredentials = async (page, limit, searchWord, status) => {
        const res = await getRequest({
            endPoint: `/api/credentials?page=${page}&limit=${limit}&name=${searchWord}`,
        });
        return res;
    }
    return {
        createNewCredential,
        checkIfUserExists,
        fetchAllCredentials
    }
}