import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class SuccessLoginResponse { 
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    accessToken: string;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    refreshToken: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    @Expose()
    accessTokenExp: string;
    
    
    
    
    @IsDate()
    
    
    
    
    
    
    @Expose()
    refreshTokenExp: string;
}
