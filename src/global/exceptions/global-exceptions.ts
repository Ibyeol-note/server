import { HttpStatus } from '@nestjs/common';
import { CommonException } from './common-exception';

export abstract class GolbalException {
  static INVALID_ENUM_VALUE = new CommonException(
    '의도하지 않은 enum value입니다.',
    HttpStatus.BAD_REQUEST,
  );
}
