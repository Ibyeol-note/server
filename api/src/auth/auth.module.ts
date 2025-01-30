import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthReader } from './implement/auth.reader';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthValidator } from './implement/auth.validator';
import { PrismaService } from '../prisma/prisma.service';
import { UserReader } from '../user/implement/uesr.reader';
import { TokenProvider } from './token.provider';

@Module({
  imports: [HttpModule],
  providers: [
    //Prisma
    PrismaService,

    // Service
    AuthService,

    // Implement
    AuthReader,
    AuthValidator,
    UserReader,

    TokenProvider,
  ],
  exports: [AuthService, AuthReader, AuthValidator, TokenProvider],
  controllers: [AuthController],
})
export class AuthModule {}
