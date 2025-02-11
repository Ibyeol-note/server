import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { plainToInstance } from 'class-transformer';
import { Post } from '../domain/post.entity';
import { CreatePostDto } from './dto/createPostDto';
import { PostResponse } from './dto/postResponse';
import { UpdatePostDto } from './dto/updatePostDto';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async createPost(
    createPostDto: CreatePostDto,
    userId: number,
  ): Promise<PostResponse> {
    const post = new Post();
    post.content = createPostDto.content;
    post.userId = userId;
    const createdPost = await this.postRepository.create(post);
    return plainToInstance(PostResponse, createdPost);
  }

  async getPostById(postId: number): Promise<PostResponse> {
    const post = await this.postRepository.findById(postId);
    return plainToInstance(PostResponse, post);
  }

  async getPosts(
    page: number = 1,
    limit: number = 10,
  ): Promise<PostResponse[]> {
    const [posts, total] = await this.postRepository.findAll({
      skip: (page - 1) * limit,
      take: limit,
    });
    return posts.map((post) => plainToInstance(PostResponse, post));
  }

  async updatePost(
    postId: number,
    updatePostDto: UpdatePostDto,
  ): Promise<PostResponse> {
    await this.postRepository.update(postId, updatePostDto);
    const updatedPost = await this.postRepository.findById(postId);
    return plainToInstance(PostResponse, updatedPost);
  }

  async deletePost(postId: number): Promise<void> {
    await this.postRepository.delete(postId);
  }
}
