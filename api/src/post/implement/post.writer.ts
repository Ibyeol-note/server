import { Injectable } from '@nestjs/common';

import { CreatePostDto } from '../dto/createPostDto';
import { PrismaService } from 'api/src/prisma/prisma.service';

@Injectable()
export class PostWriter {
  constructor(private readonly prismaService: PrismaService) {}

  async create(arg: CreatePostDto) {
    // await this.prismaService.post.create({ data: { ...arg } });
  }
}
