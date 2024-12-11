import { Injectable } from '@nestjs/common';
import { PrismaService } from 'api/src/prisma/prisma.service';
import { UpdatePostDto } from '../dto/updatePostDto';

@Injectable()
export class PostManager {
  constructor(private readonly prismaService: PrismaService) {}

  async delete(postId: string) {
    return await this.prismaService.post.delete({ where: { id: postId } });
  }

  async update(postId: string, updatePostDto: UpdatePostDto) {
    return await this.prismaService.post.update({
      where: { id: postId },
      data: updatePostDto,
    });
  }
}
