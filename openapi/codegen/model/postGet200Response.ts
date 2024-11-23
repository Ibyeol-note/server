import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';

export class PostGet200Response { 
    
    
    
    
    
    
    
    
    
    
    
    data: Array<Post>;
    /** 다음 페이지를 조회하기 위한 커서 값 (더 이상 데이터가 없으면 null) */
    
    
    
    
    
    
    
    
    
    
    nextCursor: string;
}
