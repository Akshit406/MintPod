import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

/**
 * Upload multiple images to IPFS via backend.
 * @param {Array} imageFiles - Array of File objects (images).
 * @returns {Promise<Array>} - Array of IPFS URLs or metadata returned from backend.
 */
const uploadImages = async (imageFiles) => {
  const formData = new FormData();

  // Append each image file with key 'images' to match Express multer field
  imageFiles.forEach((file) => {
    formData.append('images', file);
  });

  try {
    const response = await axiosInstance.post(API_PATHS.CREATE_COLLECTION, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (err) {
    console.error("❌ Error uploading images:", err);
    throw err;
  }
};

export default uploadImages;
