import { Injectable } from '@nestjs/common';
import { PostException } from 'api/src/global/exceptions/post-exceptions';
import { PrismaService } from 'api/src/prisma/prisma.service';

@Injectable()
export class PostValidator {
  constructor(private readonly prismaService: PrismaService) {}

  async checkDisappearById(postId: string) {
    const isExist = await this.prismaService.post.findFirst({
      where: { id: postId },
    });
    if (isExist) {
      throw PostException.FOUND;
    }
  }
}
