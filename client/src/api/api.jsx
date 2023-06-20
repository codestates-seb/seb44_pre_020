import axios from "axios";

export const postRequest = async (data) => {
  try {
    const res = await axios.post(
      "https://032b9d6f-98f0-429c-ae1e-76363c379d20.mock.pstmn.io",
      data
    );
    console.log(res);
  } catch (err) {
    console.error("Error:", err);
  }
};

export const getRequest = async () => {
  try {
    const res = await axios.get("/mockupdata/questions.json");
    return res.data;
  } catch (err) {
    console.error("Error:", err);
  }
};
