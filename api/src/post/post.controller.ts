import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PostService } from './posts.service';
import { CreatePostDto } from './dto/createPostDto';
import { UpdatePostDto } from './dto/updatePostDto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return await this.postService.createPost(createPostDto);
  }

  @Get(':id')
  async getPostById(@Param('id', ParseIntPipe) id: string) {
    return await this.postService.getPostById(id);
  }

  @Get()
  async getPosts(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.postService.getPosts(page, limit);
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return await this.postService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return await this.postService.deletePost(id);
  }
}
