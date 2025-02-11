import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PostService } from './posts.service';
import { CreatePostDto } from './dto/createPostDto';
import { PostResponse } from './dto/postResponse';
import { UpdatePostDto } from './dto/updatePostDto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @Body('userId', ParseIntPipe) userId: number,
  ): Promise<PostResponse> {
    return this.postService.createPost(createPostDto, userId);
  }

  @Get(':id')
  async getPostById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PostResponse> {
    return this.postService.getPostById(id);
  }

  @Get()
  async getPosts(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<PostResponse[]> {
    return this.postService.getPosts(page, limit);
  }

  @Put(':id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostResponse> {
    return this.postService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  async deletePost(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.postService.deletePost(id);
  }
}
