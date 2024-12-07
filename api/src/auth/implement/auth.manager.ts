import { Injectable } from '@nestjs/common';
import { DeviceInfo, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'api/src/prisma/prisma.service';

@Injectable()
export class AuthManager {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  generateAccessToken(user: User): string {
    const payload = {
      id: user.id,
      email: user.email,
    };

    return this.generateToken(
      payload,
      process.env.JWT_ACCESS_SECRET,
      process.env.JWT_ACCESS_EXPIRES,
    );
  }

  async generateRefreshToken(
    user: User,
    deviceInfo: DeviceInfo,
  ): Promise<string> {
    const payload = {
      id: user.id,
      email: user.email,
      deviceInfo,
    };

    const token = this.generateToken(
      payload,
      process.env.JWT_ACCESS_SECRET,
      process.env.JWT_REFRESH_EXPIRES,
    );

    await this.prisma.refreshToken.create({
      data: {
        token,
        userId: user.id,
        deviceInfo,
        expiresAt: new Date(
          Date.now() + parseInt(process.env.JWT_REFRESH_EXPIRES) * 1000,
        ),
      },
    });

    return token;
  }

  private generateToken = (payload: any, secret: string, expiresIn: string) => {
    return this.jwtService.sign(payload, { secret, expiresIn });
  };
}
