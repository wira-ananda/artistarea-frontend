// src/api/libs/api.js
import axiosInstance from "../axios";

// Mengambil data artis berdasarkan ID
export const fetchArtist = async (artistId) => {
  try {
    const response = await axiosInstance.get(`/artist/${artistId}`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching artist data:", error);
    throw error;
  }
};

// Mengambil semua artwork
export const fetchArtwork = async () => {
  try {
    const response = await axiosInstance.get(`/artwork`);
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching artwork data:", error);
    throw error;
  }
};

// Mengambil artwork berdasarkan ID
export const fetchArtworkById = async (artworkId) => {
  try {
    const response = await axiosInstance.get(`/artwork/${artworkId}`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching artwork data:", error);
    throw error;
  }
};

// Mengambil data pengguna berdasarkan ID
export const fetchUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}`);
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
