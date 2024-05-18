import UserState from "./UserState.interface";

export default interface EditUserResult {
    success: boolean, 
    editedUser?: UserState,
    message?: string,
}