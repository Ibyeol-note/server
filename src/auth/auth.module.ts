import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthReader } from './implement/auth.reader';

@Module({
  providers: [AuthService, AuthReader],
  exports: [AuthService, , AuthReader],
})
export class AuthModule {}
