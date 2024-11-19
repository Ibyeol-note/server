import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginMethod } from '@prisma/client';
import { socialLoginDto } from './dto/socialLoginDto';
import {
  ValidateBody,
  ValidateParam,
  ValidateParameters,
} from 'src/global/decorator/validate-request-body.decorator.ts';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post(':loginMethod')
  @ValidateParameters
  async socialLogin(
    @Param('loginMethod') loginMethod: LoginMethod,
    @Body() socialLoginDto: socialLoginDto,
  ) {
    return await this.AuthService.socialLogin(loginMethod, socialLoginDto);
  }
}
