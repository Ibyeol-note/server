import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { PostService } from '../post/posts.service';
import { UserProfile } from '../domain/user-profile.entity';
import { User } from '../domain/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile]), AuthModule],
  controllers: [UserController],
  providers: [
    // Service
    UserService,
    PostService,

    // Implement
    // UserReader,
    // UserWirter,
    // UserManager,
    // UserValidator,
  ],
  // exports: [UserReader, UserWirter, UserManager, UserValidator],
  exports: [UserService],
})
export class UserModule {}
