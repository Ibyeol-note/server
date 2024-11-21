import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthReader } from './implement/auth.reader';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthValidator } from './implement/auth.validator';

@Module({
  imports: [HttpModule],
  providers: [AuthService, AuthReader, AuthValidator],
  exports: [AuthService, AuthReader, AuthValidator],
  controllers: [AuthController],
})
export class AuthModule {}
