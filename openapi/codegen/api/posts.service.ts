import { Injectable } from '@nestjs/common';

@Injectable()
export class Posts {
    postPost(
        createPostDto: CreatePostDto
    ): Promise<Post> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
