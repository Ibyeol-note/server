import { Injectable } from '@nestjs/common';

import { PostWriter } from './implement/post.writer';
import { PostManager } from './implement/post.manager';
import { PostValidator } from './implement/post.validator';
import { PostReader } from './implement/post.reader';
import { CreatePostDto } from './dto/createPostDto';
import { UpdatePostDto } from './dto/updatePostDto';
import { PostException } from '../global/exceptions/post-exceptions';
import { Post } from '@prisma/client';

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

  async getPostById(postId: string): Promise<Post> {
    // TODO OpenAPI Generator의 Post Model로 변경
    return await this.postReader.findById(postId);
  }

  getPosts(page: number, limit: number) {
    // Business Logics
    return {
      // Return Data
    };
  }

  async updatePost(
    postId: string,
    updatePostDto: UpdatePostDto,
  ): Promise<Post> {
    await this.postValidator.checkDisappearById(postId);

    await this.postManager.update(postId, updatePostDto);
    // TODO OpenAPI Generator의 Post Model로 변경
    return await this.postReader.findById(postId);
  }
}
