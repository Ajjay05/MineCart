import axios from "axios";

export const list = async () => {
  const apiUrl = "https://new-data-flax.vercel.app/";

  try {
    const apiData = await axios.get(apiUrl);

    // console.log(apiData, "data");
    return apiData?.data;
  } catch (error) {
    return error;
  }
};
