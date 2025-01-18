import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  @HttpCode(200)
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
