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

    postIdDelete(
    ): Promise<void> {
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

    postIdPut(
        updatePostDto: UpdatePostDto
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

}
