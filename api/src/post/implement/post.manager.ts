import { Injectable } from '@nestjs/common';
import { PrismaService } from 'api/src/prisma/prisma.service';

@Injectable()
export class PostManager {
  constructor(private readonly prismaService: PrismaService) {}

  async delete(postId: string) {
    return await this.prismaService.post.delete({ where: { id: postId } });
  }
}
