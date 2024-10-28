import { tags } from "typia";

export interface User { 
    
    id?: number;
    
    username?: string;
    
    email?: string;
    /** 유저의 현재 상태 */
    status?: string;
    /** 유저의 역할 */
    role?: string;
    /** 유저 생성 날짜 */
    createdAt?: string & tags.Format<"date-time">;
    /** 유저 정보 수정 날짜 */
    updatedAt?: string & tags.Format<"date-time">;
}
export type StatusEnum = "active" | "inactive" | "suspended" | ;
export type RoleEnum = "admin" | "user" | "guest" | ;

