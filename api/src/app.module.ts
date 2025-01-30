import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: determineEnvFile(),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT', 3306),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [__dirname + '/domain/*.entity.{ts,js}'], // 엔티티 경로 지정
        synchronize: configService.get<boolean>('TYPEORM_SYNC', true), // 개발 환경에서만 true
      }),
    }),
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

function determineEnvFile(): string {
  const env = process.env.NODE_ENV || 'local'; // 기본값은 'local'
  const envPath = `./api/src/global/config/envs/.${env}.env`;
  return envPath;
}
