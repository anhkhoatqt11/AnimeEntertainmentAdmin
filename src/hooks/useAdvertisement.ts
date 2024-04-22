import { getRequest, postRequest } from "@/lib/fetch";

export const useAdvertisement = () => {
  const fetchAllAdvertisement = async () => {
    const res = await getRequest({
      endPoint: `/api/advertisements`,
    });
    return res;
  };

  const createAdvertisement = async (data) => {
    const res = await postRequest({
      endPoint: "/api/advertisements/add",
      isFormData: false,
      formData: data,
    });
    return res;
  };

  const editAdvertisement = async (data) => {
    const res = await postRequest({
      endPoint: "/api/advertisements/edit",
      isFormData: false,
      formData: data,
    });
    return res;
  };

  return {
    fetchAllAdvertisement,
    createAdvertisement,
    editAdvertisement,
  };
};
