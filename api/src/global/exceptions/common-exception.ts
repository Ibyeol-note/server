import {
  HttpException,
  HttpExceptionOptions,
  HttpStatus,
} from '@nestjs/common';

export class CommonException extends HttpException {
  constructor(
    message: string,
    status: HttpStatus = HttpStatus.BAD_REQUEST,
    options?: HttpExceptionOptions,
  ) {
    super(message, status, options);
  }

  getStatus(): HttpStatus {
    return super.getStatus();
  }
}
