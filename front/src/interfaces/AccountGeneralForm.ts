export default interface AccountGeneralForm {
    firstname: string,
    lastname: string,
    email: string,
    username: string,
    profile_picture: {
        file: File|null,
        fileBase64: string,
        uri: string,
    },
    preference: string,
}