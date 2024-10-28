import { tags } from "typia";

export interface CreateUserDto { 
    
    username: string;
    
    email: string;
    
    password: string;
    
    role: string;
}
export type RoleEnum = "admin" | "user" | "guest" | ;

