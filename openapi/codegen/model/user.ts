import { tags } from "typia";

export interface User { 
    
    id?: number;
    
    email?: string & tags.Format<"email">;
    
    gender?: string;
    
    name?: string;
    
    birthday?: string & tags.Format<"date">;
    
    birthdayType?: string;
    
    loginType?: string;
    
    registrationAt?: string & tags.Format<"date-time">;
    
    isDeleted?: boolean;
    
    deletedAt?: string & tags.Format<"date-time">;
}
export type GenderEnum = "MALE" | "FEMALE" | "NOT_CHOICE" | ;
export type LoginTypeEnum = "NAVER" | "KAKAO" | "GOOGLE" | "APPLE" | ;

