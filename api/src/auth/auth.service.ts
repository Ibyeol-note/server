import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SuccessLogin } from './interface/successLogin';
import { AuthReader } from './implement/auth.reader';

import { LoginMethod } from '@prisma/client';
import { socialLoginDto } from './dto/socialLoginDto';
import { AuthException } from '../global/exceptions/auth-exceptions';
import { User } from '../domain/user.entity';
import { UserCommonProperties } from './interface/integrate-user.interface';
import { UserProfile } from '../domain/user-profile.entity';
import { PrismaService } from '../prisma/prisma.service';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { TokenProvider } from './token.provider';
import { UserAccessTokenPayload } from './interface/token.payload';
import { ResponseTokenDto } from './dto/response-dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly authReader: AuthReader,
    private readonly tokenProvider: TokenProvider,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserProfile)
    private readonly userProfileRepository: Repository<UserProfile>,
  ) {}

  async socialLogin(
    loginMethod: LoginMethod,
    socialLoginDto: socialLoginDto,
  ): Promise<SuccessLogin> {
    let userInfo: UserCommonProperties;
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

    if (userInfo) {
      let isFirst: boolean = false;
      let token: ResponseTokenDto;
      const isExistUser = await this.userRepository.findOne({
        where: {
          socialLoginId: String(userInfo.id),
        },
      });
      if (!isExistUser) {
        isFirst = true;
        const newUser = new User();
        newUser.socialLoginId = String(userInfo.id);
        newUser.name = userInfo.name;
        newUser.email = userInfo.email || null;
        newUser.gender = userInfo.gender || null;
        newUser.birthday = userInfo.birthday || null;
        const createdUser = await this.userRepository.save(newUser);

        const newUserProfile = new UserProfile();
        newUserProfile.userId = createdUser.id;
        newUserProfile.nickname = userInfo.nickname || null;
        await this.userProfileRepository.save(newUserProfile);
        token = this.tokenProvider.createToken(createdUser);
      } else {
        token = this.tokenProvider.createToken(isExistUser);
      }

      if (isExistUser.name || isExistUser.gender) {
        isFirst = true;
      }

      return { ...token, isFirst };
    } else {
      throw AuthException.ERROR_SOCIAL_LOGIN;
    }
  }
}
