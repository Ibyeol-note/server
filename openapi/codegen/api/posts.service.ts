import { Injectable } from '@nestjs/common';

@Injectable()
export class Posts {
    postGet(
        cursor: string
        limit: number
    ): Promise<PostGet200Response> {
        // Business Logics
        return {
            // Return Data
        };
    }

    postIdGet(
        id: number
    ): Promise<Post> {
        // Business Logics
        return {
            // Return Data
        };
    }

    postPost(
        createPostDto: CreatePostDto
    ): Promise<Post> {
        // Business Logics
        return {
            // Return Data
        };
    }

    postPut(
        createPostDto: CreatePostDto
    ): Promise<Post> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
