import UserState from "./UserState.interface";

export default interface SignUpResult {
    success: boolean,
    message?: string,
    user?: UserState,
}