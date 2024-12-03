import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UserReader } from './implement/uesr.reader';
import { UserWirter } from './implement/user.writer';
import { UserManager } from './implement/user.manager';
import { UserValidator } from './implement/uesr.validator';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [
    // Service
    UserService,

    // Implement
    UserReader,
    UserWirter,
    UserManager,
    UserValidator,

    //Prisma
    PrismaService,
  ],
  exports: [UserReader, UserWirter, UserManager, UserValidator],
})
export class UserModule {}
