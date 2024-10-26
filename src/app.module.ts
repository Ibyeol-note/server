import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UserModule, PostModule, AuthModule],
  providers: [AppService],
})
export class AppModule {}
