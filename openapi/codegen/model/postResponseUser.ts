import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class PostResponseUser { 
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    id: number;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    name: string;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    image: string;
}
