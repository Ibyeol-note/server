import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';

export class Post { 
    
    
    
    
    
    
    
    
    
    
    
    id: string;
    
    
    
    
    
    
    
    
    
    
    
    content: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    createdAt: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    updatedAt: string;
    
    
    
    
    
    
    
    
    
    
    
    isDeleted: boolean;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    deletedAt: string;
}
