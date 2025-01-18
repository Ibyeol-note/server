import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class CommentResponse { 
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    id: string;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    content: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    @Expose()
    createdAt: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    @Expose()
    updatedAt: string;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    isDeleted: boolean;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    @Expose()
    deletedAt: string;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    user: CommentResponseUser;
}
