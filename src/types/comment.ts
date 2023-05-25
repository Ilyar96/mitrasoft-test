import { Id } from "./common";

export interface Comment {
	postId: Id;
	id: Id;
	name: string;
	email: string;
	body: string;
}
