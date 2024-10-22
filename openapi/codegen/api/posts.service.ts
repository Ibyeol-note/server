import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  createPost(CreatePostDto: CreatePostDto): Promise<Post> {
    // Business Logics
    return {
      // Return Data
    };
  }
  deletePost(postId: number): Promise<> {
    // Business Logics
    return {
      // Return Data
    };
  }
  getPostById(postId: number): Promise<Post> {
    // Business Logics
    return {
      // Return Data
    };
  }
  getPosts(page: numberlimit: number): Promise<Array&lt;Post&gt;> {
    // Business Logics
    return {
      // Return Data
    };
  }
  updatePost(postId: numberUpdatePostDto: UpdatePostDto): Promise<Post> {
    // Business Logics
    return {
      // Return Data
    };
  }
}