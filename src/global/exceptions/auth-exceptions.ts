import { HttpStatus } from '@nestjs/common';
import { CommonException } from './common-exception';

export abstract class AuthException {
  static INVALID_SOCIAL_LOGIN_METHOD = new CommonException(
    '존재하지 않는 소셜로그인 방법입니다.',
    HttpStatus.BAD_REQUEST,
  );
}
