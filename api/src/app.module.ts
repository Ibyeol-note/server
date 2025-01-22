import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    PostModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'test',
      entities: [__dirname + '/domain/*.entity.{ts,js}'], // 경로를 통한 엔티티 지정
      synchronize: true, // 개발 중에만 사용
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
