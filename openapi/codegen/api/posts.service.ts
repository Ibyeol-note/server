import { Injectable } from '@nestjs/common';
import { model/createPostDto } from './model/createPostDto';
import { model/post } from './model/post';
import { model/updatePostDto } from './model/updatePostDto';

@Injectable()
export class PostsService {
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
