import { Injectable } from '@nestjs/common';

import { PostWriter } from './implement/post.writer';
import { PostManager } from './implement/post.manager';
import { PostValidator } from './implement/post.validator';
import { PostReader } from './implement/post.reader';
import { CreatePostDto } from './dto/createPostDto';
import { UpdatePostDto } from './dto/updatePostDto';
import { PostException } from '../global/exceptions/post-exceptions';

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

  async deletePost(postId: string) {
    await this.postValidator.checkDisappearById(postId);

    return await this.postManager.delete(postId);
  }

  getPostById(postId: string) {
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
  updatePost(postId: string, updatePostDto: UpdatePostDto) {
    // Business Logics
    return {
      // Return Data
    };
  }
}
