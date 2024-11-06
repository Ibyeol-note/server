import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const swaggerDocument = JSON.parse(
    readFileSync(join(process.cwd(), 'openapi.json'), 'utf8'),
  );

  // Swagger UI 설정
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  await app.listen(3000);
}
bootstrap();
