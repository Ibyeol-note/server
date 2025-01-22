import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SuccessLogin } from './interface/successLogin';
import { AuthReader } from './implement/auth.reader';

import { LoginMethod } from '@prisma/client';
import { socialLoginDto } from './dto/socialLoginDto';
import { AuthException } from '../global/exceptions/auth-exceptions';
import { User } from '../user/dto/user';

@Injectable()
export class AuthService {
  constructor(private readonly authReader: AuthReader) {}

  async socialLogin(
    loginMethod: LoginMethod,
    socialLoginDto: socialLoginDto,
  ): Promise<SuccessLogin> {
    let userInfo;
    switch (loginMethod) {
      case LoginMethod.KAKAO:
        userInfo = await this.authReader.getKaKaoUserInfo(
          socialLoginDto.accessToken,
        );
        break;
      case LoginMethod.APPLE:
        userInfo = await this.authReader.getAppleUserInfo(
          socialLoginDto.accessToken,
        );
        break;
      case LoginMethod.NAVER:
        userInfo = await this.authReader.getNaverUserInfo(
          socialLoginDto.accessToken,
        );
        break;
      // TODO) GOOGLE LOGIN 추가시
      // case LoginMethod.GOOGLE:
      // userInfo = await this.authReader.getGoogleUserInfo(socialLoginDto.accessToken);
      // break;
      default:
        throw AuthException.INVALID_SOCIAL_LOGIN_METHOD;
    }

    console.log('loginMethod: ', loginMethod);
    console.log('userInfo: ', userInfo);
    if (userInfo) {
      const newUser = new User();
      newUser.email = userInfo.
    } else {
      throw AuthException.ERROR_SOCIAL_LOGIN;
    }

    return {
      // Return Data
    };
  }
}
