import { getRequest, postRequest } from "@/lib/fetch";

export const useAnimeEpisodes = () => {
  const createNewEpisode = async (data) => {
    const res = await postRequest({
      endPoint: "/api/animes/anime-episodes/add",
      isFormData: false,
      formData: data,
    });
    return res;
  };

  return {
    createNewEpisode,
  };
};
