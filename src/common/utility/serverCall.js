import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Origin: "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const serverRequest = (method = "POST") => (url) => async (
  data,
  options = {
    params: {},
    withResponseHeader: false,
    withResponseComplete: false,
  }
) => {
  const query = {
    method,
    url,
    data,
  };
  if (options.params) {
    query.params = options.params;
  }

  let extras = {};
      
  if (options.contentType) {
    extras.contentType = options.contentType || "application/json";
  }

  try {
    let result = await axiosInstance(query);
    if (options.withResponseComplete) {
      return result;
    }

    if (options.withResponseHeader) {
      return {
        headers: {
          ...result.headers,
          status: result.status,
        },
        ...result.data,
      };
    }
    return result.data;
  } catch (error) {
    throw error.response;
  }
};

export const getRequest = serverRequest("GET");
export const postRequest = serverRequest("POST");
export const putRequest = serverRequest("PUT");
export const deleteRequest = serverRequest("DELETE");

export default serverRequest;
