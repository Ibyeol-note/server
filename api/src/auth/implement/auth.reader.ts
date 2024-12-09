import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { KakaoUser } from '../interface/kakao-user';
import { AppleUser } from '../interface/apple-user';
import { NaverUser } from '../interface/naver-user';
import { UserReader } from 'api/src/user/implement/uesr.reader';
import { AuthException } from 'api/src/global/exceptions/auth-exceptions';

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
      if (data) {
        return data;
      }
      return null;
    } catch (error) {
      throw AuthException.ERROR_SOCIAL_LOGIN;
    }
  }

  async getAppleUserInfo(accessToken: string): Promise<AppleUser | null> {
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
        return data;
      }
      return null;
    } catch (error) {
      throw AuthException.ERROR_SOCIAL_LOGIN;
    }
  }

  async getNaverUserInfo(accessToken: string): Promise<NaverUser | null> {
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
        return data;
      }
      return null;
    } catch (error) {
      throw AuthException.ERROR_SOCIAL_LOGIN;
    }
  }
}
