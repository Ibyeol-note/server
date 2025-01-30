import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthReader } from './implement/auth.reader';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthValidator } from './implement/auth.validator';
import { UserReader } from '../user/implement/uesr.reader';
import { TokenProvider } from './token.provider';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../domain/user.entity';
import { UserProfile } from '../domain/user-profile.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([User, UserProfile]),
    JwtModule.registerAsync({
      global: true,
      useFactory: () => ({
        secret: process.env.JWT_ACCESS_SECRET || 'defaultSecretKey',
        signOptions: {
          expiresIn: parseInt(process.env.JWT_ACCESS_EXPIRES_IN || '3600', 10), // 기본값 설정
          algorithm: 'HS512',
        },
      }),
    }),
  ],
  providers: [
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
