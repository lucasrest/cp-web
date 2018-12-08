import { User } from "../user";

export interface TokenDTO {
    user: User;
    token: string;
}
