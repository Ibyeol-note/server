import { Injectable } from '@nestjs/common';
import { PrismaService } from 'api/src/prisma/prisma.service';

@Injectable()
export class PostReader {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(postId: string) {
    return await this.prismaService.post.findFirst({ where: { id: postId } });
  }
}
