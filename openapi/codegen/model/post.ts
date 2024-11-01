import { tags } from "typia";

export interface Post { 
    
    id?: string;
    
    content?: string;
    
    createdAt?: string & tags.Format<"date-time">;
    
    updatedAt?: string & tags.Format<"date-time">;
    
    isDeleted?: boolean;
    
    deletedAt?: string & tags.Format<"date-time">;
}

