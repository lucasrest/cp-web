import { User } from "../models/user";

export interface CPToken {
    user: User;
    token: string;
}
