import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './posts.service';

@Module({
  controllers: [PostController],
  providers: [
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
