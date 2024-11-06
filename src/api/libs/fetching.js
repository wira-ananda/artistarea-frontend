import axiosInstance from "../axios";

export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post(`/user/register`, data);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchUserById = async (userId) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchAllUser = async () => {
  try {
    const response = await axiosInstance.get(`/user`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const registerArtist = async (data) => {
  try {
    const response = await axiosInstance.post(`/artist/register`, data);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchArtistById = async (artistId) => {
  try {
    const response = await axiosInstance.get(`/artist/${artistId}`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching artist data:", error);
    throw error;
  }
};

export const fetchAllArtist = async () => {
  try {
    const response = await axiosInstance.get(`/artist`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching artist data:", error);
    throw error;
  }
};

export const postArtwork = async (data) => {
  try {
    const response = await axiosInstance.post(`/artwork/post`, data);
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching artwork data:", error);
    throw error;
  }
};

export const fetchArtworkById = async (artworkId) => {
  try {
    const response = await axiosInstance.get(`/artwork/${artworkId}`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching artwork data:", error);
    throw error;
  }
};

export const fetchAllArtwork = async () => {
  try {
    const response = await axiosInstance.get(`/artwork`);
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching artwork data:", error);
    throw error;
  }
};
