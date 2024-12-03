import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from '../dto/createPostDto';

@Injectable()
export class PostWriter {
  constructor(private readonly prismaService: PrismaService) {}

  async create(arg: CreatePostDto) {
    await this.prismaService.post.create({ data: { ...arg } });
  }
}
