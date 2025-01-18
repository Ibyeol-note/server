import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class GetMemoryStorage { 
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    imageId: number;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    url: string;
}
