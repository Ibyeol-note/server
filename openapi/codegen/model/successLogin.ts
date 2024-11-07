import { tags } from "typia";

export interface SuccessLogin { 
    
    accessToken?: string;
    
    refreshToken?: string;
    
    accessTokenExp?: string & tags.Format<"date-time">;
    
    refreshTokenExp?: string & tags.Format<"date-time">;
}

