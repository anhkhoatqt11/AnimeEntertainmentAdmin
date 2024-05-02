import { getRequest } from "@/lib/fetch";


export const useUsers = () => {
    const fetchUsersChallengePoint = async () => {
        const res = await getRequest({
            endPoint: `/api/user/challenge`,
        });
        return res;
    }
    return { fetchUsersChallengePoint }
}