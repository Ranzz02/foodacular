import useApiStore from "@/stores/api";
import axios from "axios";

const API = axios.create({
	baseURL: "https://api.spoonacular.com",
	timeout: 3000,
});

API.interceptors.request.use(
	(config) => {
		const { apiKey } = useApiStore.getState();
		if (apiKey) {
			config.params = { ...config.params, apiKey };
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

API.interceptors.response.use(
	(response) => {
		useApiStore
			.getState()
			.setQuota(
				response.headers["X-API-Quota-Left"] ||
					response.headers["x-api-quota-left"]
			);
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default API;
