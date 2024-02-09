import { UserState } from "./UserState";

export default interface EditUserResult {
    success: boolean, 
    editedUser?: UserState,
    message?: string,
}