import httpService from "./http.service";
import { Comment } from "../types/comment";

const commentEndPoint = "comments/";

const commentService = {
	get: async () => {
		const { data } = await httpService.get<Comment[]>(commentEndPoint);
		return data;
	},
};

export default commentService;
