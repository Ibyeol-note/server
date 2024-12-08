import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginMethod } from '@prisma/client';
import { socialLoginDto } from './dto/socialLoginDto';
import { EnumValidationPipe } from '../global/pipe/enum-validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post(':loginMethod')
  async socialLogin(
    @Param('loginMethod', new EnumValidationPipe(LoginMethod))
    loginMethod: LoginMethod,
    @Body() socialLoginDto: socialLoginDto,
  ) {
    return await this.AuthService.socialLogin(loginMethod, socialLoginDto);
  }
}
