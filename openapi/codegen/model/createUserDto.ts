import { tags } from "typia";

export interface CreateUserDto { 
    
    email: string;
    
    gender: string;
    
    name?: string;
    
    birthday?: string & tags.Format<"date">;
    
    birthdayType?: string;
    
    loginType: string;
}
export type GenderEnum = "MALE" | "FEMALE" | "NOT_CHOICE" | ;
export type LoginTypeEnum = "NAVER" | "KAKAO" | "GOOGLE" | "APPLE" | ;

