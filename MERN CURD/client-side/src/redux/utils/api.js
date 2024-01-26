import axios from "axios";

const api = (header) => {
    
    if (!header) {
        header = { Accept: "application/json", "Content-Type": "application/json" };
    }

    const apiSet = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
    });

    apiSet.interceptors.response.use(
        async (response) => {
            const method = response.config?.method || "";

            if (["post", "patch", "delete"].includes(method)) {
                return response;
            }

            return response;
        },
        (error) => {
            if (error.message === "Network Error") {
                throw error;
            }

            let { message } = error.response.data;

            if (!message) {
                message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
            return error.response;
        }
    );

    return apiSet;
};

export default api;