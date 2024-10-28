import { Injectable } from '@nestjs/common';

@Injectable()
export class Posts {
    createPost(
        createPostDto: CreatePostDto
    ): Promise<Post> {
        // Business Logics
        return {
            // Return Data
        };
    }

    deletePost(
        postId: number
    ): Promise<void> {
        // Business Logics
        return {
            // Return Data
        };
    }

    getPostById(
        postId: number
    ): Promise<Post> {
        // Business Logics
        return {
            // Return Data
        };
    }

    getPosts(
        page: number
        limit: number
    ): Promise<Array<Post>> {
        // Business Logics
        return {
            // Return Data
        };
    }

    updatePost(
        postId: number
        updatePostDto: UpdatePostDto
    ): Promise<Post> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
