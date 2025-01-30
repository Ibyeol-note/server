import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const swaggerDocument = yaml.load(
    readFileSync(join(process.cwd(), 'openapi.yaml'), 'utf8'),
  );

  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  await app.listen(3000);
}
bootstrap();
