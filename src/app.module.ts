import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
@Module({
  imports: [UserModule],
  providers: [AppService],
})
export class AppModule {}
