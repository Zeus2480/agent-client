import axios from "axios";


axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
// Create an Axios instance
const baseURL = import.meta.env.VITE_APP_BASE_URL;
const api = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add an Authorization header if a token is stored in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // If there's an error, reject the Promise with the error
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // If the response is successful, return the response
    return response;
  },
  (error) => {
    // If the response has a status of 401 Unauthorized, handle it
    if (error.response.status === 401) {
      // Handle the 401 error
      // For example, you might redirect to the login page
    }
    // If there's an error, reject the Promise with the error
    return Promise.reject(error);
  }
);

export default api;
