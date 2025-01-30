import { Injectable } from '@nestjs/common';

import { CreatePostDto } from '../dto/createPostDto';

@Injectable()
export class PostWriter {
  constructor() {}

  async create(arg: CreatePostDto) {
    // await this.prismaService.post.create({ data: { ...arg } });
  }
}
