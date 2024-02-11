import { RowDataPacket } from "mysql2";

export default interface UserPasswordRow extends RowDataPacket {
    password: string,
}