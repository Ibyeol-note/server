import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class GetUserResponse { 
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    email: string;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    gender: string;
    
    
    
    
    
    
    
    
    
    
    
    @Expose()
    name: string;
    /** 사용자가 최근에 작성한 5개의 게시글 목록 */
    
    
    
    
    
    
    
    
    
    
    @Expose()
    recentPosts: Array<GetUserResponseRecentPostsInner>;
}
