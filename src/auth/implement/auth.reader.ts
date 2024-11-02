import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { KakaoUser } from '../interface/kakao-user';

@Injectable()
export class AuthReader {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async getKaKaoUserInfo(accessToken: string) {
    const kakaoUserInfoUrl = process.env.KAKAO_USER_INFO_URL;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    const response = await lastValueFrom(
      this.httpService.get(kakaoUserInfoUrl, {
        headers: headers,
      }),
    );

    const data: KakaoUser = response.data;
    if (data) {
      return data;
    } else {
      return null;
    }
  }
}
