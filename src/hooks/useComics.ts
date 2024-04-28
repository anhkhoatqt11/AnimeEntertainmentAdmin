import { getRequest, postRequest } from "@/lib/fetch";

export const useComics = () => {
  const fetchAllComics = async (name, sort, page) => {
    const res = await getRequest({
      endPoint: `/api/comics?name=${name}&page=${page}&limit=15&sort=${sort}`,
    });
    return res;
  };

  //   const fetchComicById = async (id) => {
  //     const res = await getRequest({
  //       endPoint: `/api/animes/animes-detail?animeId=${id}`,
  //     });
  //     return res;
  //   };

  //   const createNewAnime = async (data) => {
  //     const res = await postRequest({
  //       endPoint: "/api/animes/animes-detail/add",
  //       isFormData: false,
  //       formData: data,
  //     });
  //     return res;
  //   };

  //   const editAnime = async (data) => {
  //     const res = await postRequest({
  //       endPoint: "/api/animes/animes-detail/edit",
  //       isFormData: false,
  //       formData: data,
  //     });
  //     return res;
  //   };

  //   const deleteAnime = async (data) => {
  //     const res = await postRequest({
  //       endPoint: "/api/animes/animes-detail/delete",
  //       isFormData: false,
  //       formData: data,
  //     });
  //     return res;
  //   };

  return {
    fetchAllComics,
    // fetchAnimeById,
    // createNewAnime,
    // editAnime,
    // deleteAnime,
  };
};
