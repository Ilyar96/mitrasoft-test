import { FetchingStatus } from "../../../types/common";
import { User } from "../../../types/user";

export interface UserData {
	status: FetchingStatus;
	error: string | null;
	data: User | null;
}
