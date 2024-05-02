import { getRequest, postRequest } from "@/lib/fetch";

export const useAlbum = () => {
  const fetchComicAlbum = async () => {
    const res = await getRequest({
      endPoint: `/api/album/comic`,
    });
    return res;
  };

  const fetchAnimeAlbum = async () => {
    const res = await getRequest({
      endPoint: `/api/album/anime`,
    });
    return res;
  };

  return {
    fetchComicAlbum,
    fetchAnimeAlbum,
  };
};
