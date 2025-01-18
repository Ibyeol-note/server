import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class GetUserResponseRecentPostsInner { 
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    id: string;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    content: string;
}
