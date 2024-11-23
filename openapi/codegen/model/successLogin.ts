import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';

export class SuccessLogin { 
    
    
    
    
    
    
    
    
    
    
    
    accessToken: string;
    
    
    
    
    
    
    
    
    
    
    
    refreshToken: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    accessTokenExp: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    refreshTokenExp: string;
}
