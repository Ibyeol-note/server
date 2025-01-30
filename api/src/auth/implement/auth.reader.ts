import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { KakaoUser } from '../interface/kakao-user';
import { AppleUser } from '../interface/apple-user';
import { NaverUser } from '../interface/naver-user';
import { UserReader } from 'api/src/user/implement/uesr.reader';
import { AuthException } from 'api/src/global/exceptions/auth-exceptions';
import { UserCommonProperties } from '../interface/integrate-user.interface';

@Injectable()
export class AuthReader {
  constructor(
    // private readonly prismaService: PrismaService,
    private readonly userReader: UserReader,
    private readonly httpService: HttpService,
  ) {}

  async getKaKaoUserInfo(accessToken: string) {
    const kakaoUserInfoUrl = process.env.KAKAO_USER_INFO_URL;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    try {
      const response = await lastValueFrom(
        this.httpService.get(kakaoUserInfoUrl, {
          headers: headers,
        }),
      );

      const data: KakaoUser = response.data;

      const refinedUserInfo: UserCommonProperties = {
        id: data.id,
        email: data.kakao_account!.email,
      };

      if (refinedUserInfo) {
        return refinedUserInfo;
      }
      return null;
    } catch (error) {
      throw AuthException.ERROR_SOCIAL_LOGIN;
    }
  }

  async getAppleUserInfo(accessToken: string) {
    const appleUserInfoUrl = process.env.APPLE_USER_INFO_URL;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await lastValueFrom(
        this.httpService.get(appleUserInfoUrl, {
          headers: headers,
        }),
      );

      const data: AppleUser = response.data;
      if (data) {
        const refinedUserInfo: UserCommonProperties = {
          id: data.sub,
          email: data.email || null,
          name: data.name
            ? String(data.name.firstName) + String(data.name.lastName)
            : null,
        };
        return refinedUserInfo;
      }
      return null;
    } catch (error) {
      throw AuthException.ERROR_SOCIAL_LOGIN;
    }
  }

  async getNaverUserInfo(accessToken: string) {
    const naverUserInfoUrl = process.env.NAVER_USER_INFO_URL;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    try {
      const response = await lastValueFrom(
        this.httpService.get(naverUserInfoUrl, {
          headers: headers,
        }),
      );

      const data: NaverUser = response.data;
      if (data && data.resultcode === '00') {
        const refinedUserInfo: UserCommonProperties = {
          id: data.response.id,
          email: data.response.email,
        };
        return refinedUserInfo;
      }
      return null;
    } catch (error) {
      throw AuthException.ERROR_SOCIAL_LOGIN;
    }
  }
}
