import { tags } from "typia";

export interface UpdateUserDto { 
    
    email?: string;
    
    password?: string;
    /** 유저 상태 업데이트 */
    status?: string;
}
export type StatusEnum = "active" | "inactive" | "suspended" | ;

