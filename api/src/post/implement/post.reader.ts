import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'api/src/domain/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostReader {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async findById(postId: number) {
    return await this.postRepository.findOne({ where: { id: postId } });
  }
}
