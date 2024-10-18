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
      typePaths: ['./**/*.gql'],
      debug: true,
      playground: true, // GraphQL Playground 활성화
    }),
    UserModule,
  ],
  providers: [AppService, UserResolver],
})
export class AppModule {}
