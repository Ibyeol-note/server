import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateNoteDto { 
    
    @IsRequired()
    
    
    
    
    
    
    
    
    
    @Expose()
    content: string;
}
