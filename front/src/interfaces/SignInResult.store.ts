import UserState from "./UserState.interface";

export default interface SignInResult {
    success: boolean,
    message?: string,
    user?: UserState,
}