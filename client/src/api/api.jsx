import axios from "axios";

// export const postRequest = async (url, data, headers) => {
//   try {
//     const res = await axios.post(url, data, { headers });
//     console.log(res);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };

export const postRequest = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    console.log(res);
  } catch (err) {
    console.error("Error:", err);
  }
};

export const getRequest = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("Error:", err);
  }
};

export const patchRequest = async (url, data) => {
  try {
    const res = await axios.patch(url, data);
    console.log(res);
  } catch (err) {
    console.error("Error:", err);
  }
};

export const deleteRequest = async (url) => {
  try {
    const res = await axios.delete(url);
    console.log(res);
  } catch (err) {
    console.error("Error:", err);
  }
};
