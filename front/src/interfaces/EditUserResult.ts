import UserState from "./UserState.interface";

export default interface EditUserResult {
    result: boolean, 
    editedUser?: UserState,
    message?: string,
}