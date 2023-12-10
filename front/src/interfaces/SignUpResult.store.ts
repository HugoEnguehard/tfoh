import { UserState } from "./UserState";

export default interface SignUpResult {
    success: boolean,
    message?: string,
    user?: UserState,
}