import { HttpStatus } from '@nestjs/common';
import { CommonException } from './common-exception';

export abstract class PostException {
  static NOT_FOUND = new CommonException(
    '해당 게시글을 찾을 수 없습니다.',
    HttpStatus.NOT_FOUND,
  );
}
