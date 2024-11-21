import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginMethod } from '@prisma/client';
import { socialLoginDto } from './dto/socialLoginDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post(':loginMethod')
  async socialLogin(
    @Param('loginMethod') loginMethod: LoginMethod,
    @Body() socialLoginDto: socialLoginDto,
  ) {
    return await this.AuthService.socialLogin(loginMethod, socialLoginDto);
  }
}
