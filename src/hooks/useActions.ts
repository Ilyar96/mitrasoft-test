import { bindActionCreators } from "redux";
import { useAppDispatch } from "../redux/store";
import * as AllActions from "../redux/actions";

export const useActions = () => {
	const dispatch = useAppDispatch();

	return { ...bindActionCreators(AllActions, dispatch), dispatch };
};
