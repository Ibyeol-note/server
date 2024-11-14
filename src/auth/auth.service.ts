import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginMehtod } from './enum/login-method.enum';
import { SuccessLogin } from './interface/successLogin';
import { AuthReader } from './implement/auth.reader';
import { AuthException } from 'src/global/exceptions/auth-exceptions';

@Injectable()
export class AuthService {
  constructor(private readonly authReader: AuthReader) {}

  async socialLogin(
    loginMehtod: LoginMehtod,
    accessToken: string,
  ): Promise<SuccessLogin> {
    switch (loginMehtod) {
      case LoginMehtod.KAKAO:
        await this.authReader.getKaKaoUserInfo(accessToken);
        break;
      case LoginMehtod.APPLE:
        await this.authReader.getAppleUserInfo(accessToken);
        break;

      case LoginMehtod.NAVER:
        await this.authReader.getNaverUserInfo(accessToken);
        break;
      // TODO) GOOGLE LOGIN 추가시
      // case LoginMehtod.GOOGLE:
      // await this.authReader.getGoogleUserInfo(accessToken);
      // break;
      default:
        // TODO) error code customize
        throw AuthException.INVALID_SOCIAL_LOGIN_METHOD;
    }
    return {
      // Return Data
    };
  }
}
