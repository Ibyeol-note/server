import { tags } from "typia";

export interface UpdatePostDto { 
    
    title?: string;
    
    content?: string;
    /** 게시글 상태 업데이트 */
    status?: string;
}
export type StatusEnum = "published" | "draft" | "archived" | ;

