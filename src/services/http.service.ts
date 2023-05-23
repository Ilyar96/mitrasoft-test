import axios, { AxiosInstance } from "axios";

import { BACKEND_URL, REQUEST_TIMEOUT } from "../constants";

const http: AxiosInstance = axios.create({
	baseURL: BACKEND_URL,
	timeout: REQUEST_TIMEOUT,
});

const httpService = {
	get: http.get,
	post: http.post,
	put: http.put,
	delete: http.delete,
	patch: http.patch,
};

export default httpService;
