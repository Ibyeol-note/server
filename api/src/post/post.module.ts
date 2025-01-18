import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './posts.service';
import { PostWriter } from './implement/post.writer';
import { PostReader } from './implement/post.reader';
import { PostManager } from './implement/post.manager';
import { PostValidator } from './implement/post.validator';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PostController],
  providers: [
    PrismaService,

    // Service
    PostService,

    // Implement
    // PostReader,
    // PostWriter,
    // PostManager,
    // PostValidator,
  ],
  // exports: [PostReader, PostWriter, PostManager, PostValidator],
  exports: [PostService],
})
export class PostModule {}
