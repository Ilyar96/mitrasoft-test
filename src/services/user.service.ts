import httpService from "./http.service";
import { User } from "../types/user";

const userEndPoint = "users/";

const userService = {
	get: async () => {
		const { data } = await httpService.get<User[]>(userEndPoint);
		return data;
	},
	getById: async (id: number) => {
		const { data } = await httpService.get<User>(userEndPoint + id);
		return data;
	},
};

export default userService;
