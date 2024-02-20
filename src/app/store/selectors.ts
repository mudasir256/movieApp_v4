import { RootState } from "./store";

export const selectUser = (state: RootState) => state.user.user;
export const selectAuthState = (state: RootState) => state.user.authState
