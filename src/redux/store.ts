import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";

import postsSlice from "./slices/posts/slice";
import rootSaga from "./sagas/rootSaga";
import userSlice from "./slices/user/slice";
import commentsSlice from "./slices/comments/slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		[postsSlice.name]: postsSlice.reducer,
		[userSlice.name]: userSlice.reducer,
		[commentsSlice.name]: commentsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
