export default interface UserState {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    date_creation: string,
    bio: string,
    favorite_jdr: string,
    preference: string,
    profile_picture: {
        file: File|null,
        fileBase64: string,
        uri: string,
    }
}