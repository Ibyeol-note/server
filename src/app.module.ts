import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // 자동으로 schema.gql 파일 생성
      playground: true, // GraphQL Playground 활성화
    }),
    UserModule,
  ],
  providers: [AppService, UserResolver],
})
export class AppModule {}
