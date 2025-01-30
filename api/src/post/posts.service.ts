import { Injectable } from '@nestjs/common';

import { PostWriter } from './implement/post.writer';
import { PostManager } from './implement/post.manager';
import { PostValidator } from './implement/post.validator';
import { PostReader } from './implement/post.reader';
import { CreatePostDto } from './dto/createPostDto';

import { User } from '../user/dto/user';

@Injectable()
export class PostService {
  constructor() {} // private readonly postReader: PostReader, // private readonly postValidator: PostValidator, // private readonly postManager: PostManager, // private readonly postWriter: PostWriter,

  async createPost(createPostDto: CreatePostDto, user: User) {
    // await this.prismaService.post.create({
    //   data: { ...createPostDto, userId: user.id },
    // });
    // const post = await this.prismaService.post.create({ data: {createPostDto} });
    // return plainToInstance(PostResponse, post);
  }

  // async deletePost(postId: string) {
  //   await this.postValidator.checkDisappearById(postId);

  //   const deletedPost = await this.postManager.delete(postId);

  //   return plainToInstance(PostResponse, deletedPost);
  // }

  // async getPostById(postId: string): Promise<PostResponse> {
  //   const post = await this.postReader.findById(postId);

  //   return plainToInstance(PostResponse, post);
  // }

  // async getPosts(page: number, limit: number) {
  //   // Business Logics
  //   return {
  //     // Return Data
  //   };
  // }

  // async updatePost(
  //   postId: string,
  //   updatePostDto: UpdatePostDto,
  // ): Promise<Post> {
  //   await this.postValidator.checkDisappearById(postId);

  //   await this.postManager.update(postId, updatePostDto);
  //   // TODO OpenAPI Generator의 Post Model로 변경
  //   return await this.postReader.findById(postId);
  // }
}
