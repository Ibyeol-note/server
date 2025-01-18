import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserMemoryStoragePost200Response { 
    /** 업로드된 이미지의 URL */
    
    
    
    
    
    
    
    
    
    
    @Expose()
    imageUrl: string;
}
