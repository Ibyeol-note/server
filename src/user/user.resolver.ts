import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query((returns) => Boolean)
  isOK() {
    return true;
  }
}
