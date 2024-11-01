import { tags } from "typia";

export interface UserProfile { 
    
    id?: number;
    
    nickname?: string;
    
    instagram?: string;
    
    relationshipDecision?: string;
    
    isDeleted?: boolean;
    
    deletedAt?: string & tags.Format<"date-time">;
}
export type RelationshipDecisionEnum = "HOLD_ON" | "LET_GO" | ;

