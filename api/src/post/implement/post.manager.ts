import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePostDto } from '../dto/updatePostDto';
import { Post } from 'api/src/domain/post.entity';

@Injectable()
export class PostManager {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async delete(postId: string) {
    return await this.postRepository.delete(postId);
  }

  async update(postId: number, updatePostDto: UpdatePostDto) {
    await this.postRepository.update(postId, updatePostDto);
    return this.postRepository.findOne({ where: { id: postId } });
  }
}
