import { UserState } from "./UserState";

export default interface SignInResult {
    success: boolean,
    message?: string,
    user?: UserState,
}