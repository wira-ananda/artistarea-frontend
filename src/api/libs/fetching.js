// src/api/libs/api.js
import axiosInstance from "../axios";

// Mengambil data artis berdasarkan ID
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

export const fetchAllArtwork = async () => {
  try {
    const response = await axiosInstance.get(`/artwork`);
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

export const fetchUserById = async (userId) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post(`/user/register`, userData);
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
