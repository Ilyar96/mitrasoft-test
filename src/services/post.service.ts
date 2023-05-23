import httpService from "./http.service";
import { Post, PostQuery } from "../types/post";

const postEndPoint = "posts/";

const postService = {
	get: async (params?: PostQuery) => {
		const { data } = await httpService.get<Post>(postEndPoint, { params });
		return data;
	},
};

export default postService;
