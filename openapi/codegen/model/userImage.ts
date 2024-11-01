import { tags } from "typia";

export interface UserImage { 
    
    id?: number;
    
    imageUrl?: string;
    
    isDeleted?: boolean;
    
    deletedAt?: string & tags.Format<"date-time">;
}

