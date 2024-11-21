import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SuccessLogin } from './interface/successLogin';
import { AuthReader } from './implement/auth.reader';
import { AuthException } from 'src/global/exceptions/auth-exceptions';
import { LoginMethod } from '@prisma/client';
import { socialLoginDto } from './dto/socialLoginDto';

@Injectable()
export class AuthService {
  constructor(private readonly authReader: AuthReader) {}

  async socialLogin(
    loginMethod: LoginMethod,
    socialLoginDto: socialLoginDto,
  ): Promise<SuccessLogin> {
    switch (loginMethod) {
      case LoginMethod.KAKAO:
        await this.authReader.getKaKaoUserInfo(socialLoginDto.accessToken);
        break;
      case LoginMethod.APPLE:
        await this.authReader.getAppleUserInfo(socialLoginDto.accessToken);
        break;
      case LoginMethod.NAVER:
        await this.authReader.getNaverUserInfo(socialLoginDto.accessToken);
        break;
      // TODO) GOOGLE LOGIN 추가시
      // case LoginMethod.GOOGLE:
      // await this.authReader.getGoogleUserInfo(socialLoginDto.accessToken);
      // break;
      default:
        throw AuthException.INVALID_SOCIAL_LOGIN_METHOD;
    }
    return {
      // Return Data
    };
  }
}
