import { Comment } from "../../../types/comment";
import { FetchingStatus } from "../../../types/common";

export interface CommentsData {
	status: FetchingStatus;
	error: string | null;
	entities: Comment[];
}
