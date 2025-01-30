import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from 'api/src/domain/post.entity';
import { PostException } from 'api/src/global/exceptions/post-exceptions';

@Injectable()
export class PostValidator {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async checkDisappearById(postId: number) {
    const isExist = await this.postRepository.findOne({
      where: { id: postId },
    });
    if (!isExist) {
      throw PostException.NOT_FOUND;
    }
  }
}
