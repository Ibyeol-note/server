import { IsString, IsNumber, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Post {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    id?: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    content?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    author?: string;

    @ApiProperty()
    @IsOptional()
    
    createdAt?: string;

    @ApiProperty()
    @IsOptional()
    
    updatedAt?: string;

}
