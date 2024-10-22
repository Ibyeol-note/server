import { IsString, IsNumber, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginResponse {
    @ApiProperty()
    @IsOptional()
    @IsString()
    accessToken?: string;

}
