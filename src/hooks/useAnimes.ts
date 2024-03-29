import { getRequest, postRequest } from "@/lib/fetch";


export const useAnimes = () => {
    const fetchAllAnimes = async (name, page) => {
        const res = await getRequest({
            endPoint: `/api/animes?name=${name}&page=${page}&limit=9`,
        });
        console.log(res);
        return res;
    }

    const fetchAnimeById = async (id) => {
        const res = await getRequest({
            endPoint: `/api/animes/animes-detail?id=${id}`,
        });
        return res;
    }

    return {
        fetchAllAnimes,
        fetchAnimeById,
    }
}