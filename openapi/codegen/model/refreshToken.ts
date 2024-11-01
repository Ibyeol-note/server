import { tags } from "typia";

export interface RefreshToken { 
    
    id?: number;
    
    token?: string;
    
    deviceInfo?: string;
    
    expiresAt?: string & tags.Format<"date-time">;
    
    createdAt?: string & tags.Format<"date-time">;
    
    updatedAt?: string & tags.Format<"date-time">;
}
export type DeviceInfoEnum = "WEB" | "IOS" | "ANDROID" | ;

