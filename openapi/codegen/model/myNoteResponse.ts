import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class MyNoteResponse { 
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    id: number;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    content: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    @Expose()
    createdAt: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    @Expose()
    updatedAt: string;
}
