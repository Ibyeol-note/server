import { tags } from "typia";

export interface LoginResponse { 
    
    accessToken?: string;
    
    tokenType?: string;
}
export type TokenTypeEnum = "Bearer" | "JWT" | ;

