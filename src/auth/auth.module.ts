import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthReader } from './implement/auth.reader';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [AuthService, AuthReader],
  exports: [AuthService, AuthReader],
})
export class AuthModule {}
