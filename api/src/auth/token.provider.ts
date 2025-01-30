import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  TokenPayload,
  UserAccessTokenPayload,
  UserRefreshTokenPayload,
} from './interface/token.payload';

import { v4 } from 'uuid';
import { User } from '../domain/user.entity';
import { ResponseTokenDto } from './dto/response-dto';

const ISS = 'IBYEOL NOTE';

@Injectable()
export class TokenProvider {
  constructor(private readonly jwtService: JwtService) {}

  createAccessToken(payload: TokenPayload<UserAccessTokenPayload>): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES,
      algorithm: 'HS512',
    });
  }

  async verifyAccessToken(
    accessToken: string,
  ): Promise<TokenPayload<UserAccessTokenPayload>> {
    return this.jwtService.verify(accessToken, {
      secret: process.env.JWT_ACCESS_SECRET,
    });
  }

  createRefreshToken(payload: TokenPayload<UserRefreshTokenPayload>): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES,
      algorithm: 'HS512',
    });
  }

  async verifyRefreshToken(
    refreshToken: string,
  ): Promise<TokenPayload<UserRefreshTokenPayload>> {
    return this.jwtService.verify(refreshToken, {
      secret: process.env.JWT_REFRESH_SECRET,
    });
  }

  createToken(user: User) {
    const userAccessTokenPayload: TokenPayload<UserAccessTokenPayload> = {
      iss: ISS,
      jti: v4(),
      payload: {
        userId: user.id,
        email: user.email,
        name: user.name,
      },
    };

    const userRefreshTokenPayload: TokenPayload<UserRefreshTokenPayload> = {
      iss: ISS,
      jti: v4(),
      payload: {
        userId: user.id,
        email: user.email,
      },
    };

    const accessToken = this.createAccessToken(userAccessTokenPayload);
    const refreshToken = this.createRefreshToken(userRefreshTokenPayload);

    const createdResponseTokenDto = new ResponseTokenDto();
    createdResponseTokenDto.accessToken = accessToken;
    createdResponseTokenDto.refreshToken = refreshToken;

    return createdResponseTokenDto;
  }
}
