import UserState from "./UserState.interface";

export default interface EditPasswordResult {
    result: boolean, 
    editedUser?: UserState,
    message?: string,
}