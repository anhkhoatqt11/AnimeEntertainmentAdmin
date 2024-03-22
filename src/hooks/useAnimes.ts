import { getRequest, postRequest } from "@/lib/fetch";


export const useAnimes = () => {
    const fetchAllAnimes = async (name, page) => {
        const res = await getRequest({
            endPoint: `/api/animes?name=${name}&page=${page}&limit=10`,
        });
        console.log(res);
        return res;
    }

    return {
        fetchAllUser
    }
}