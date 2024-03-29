import { getRequest, postRequest } from "@/lib/fetch";


export const useComics = () => {
    const fetchAllComics = async (name, page) => {
        const res = await getRequest({
            endPoint: `/api/comics?name=${name}&page=${page}&limit=10`,
        });
        console.log(res);
        return res;
    }

    return {
        fetchAllComics,
    }
}