import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';

export class UpdatePostDto { 
    
    
    
    
    
    
    
    
    
    
    
    title: string;
    
    @IsRequired()
    
    
    
    
    
    
    
    
    
    content: string;
}
