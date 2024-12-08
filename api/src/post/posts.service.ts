import { Injectable } from '@nestjs/common';

import { PostWriter } from './implement/post.writer';
import { PostManager } from './implement/post.manager';
import { PostValidator } from './implement/post.validator';
import { PostReader } from './implement/post.reader';
import { CreatePostDto } from './dto/createPostDto';
import { UpdatePostDto } from './dto/updatePostDto';

@Injectable()
export class PostService {
  constructor(
    private readonly postWriter: PostWriter,
    private readonly postManager: PostManager,
    private readonly postValidator: PostValidator,
    private readonly postReader: PostReader,
  ) {}

  async createPost(createPostDto: CreatePostDto) {
    return await this.postWriter.create(createPostDto);
  }
  deletePost(postId: number) {
    // Business Logics
    return {
      // Return Data
    };
  }
  getPostById(postId: number) {
    // Business Logics
    return {
      // Return Data
    };
  }
  getPosts(page: number, limit: number) {
    // Business Logics
    return {
      // Return Data
    };
  }
  updatePost(postId: number, updatePostDto: UpdatePostDto) {
    // Business Logics
    return {
      // Return Data
    };
  }
}
