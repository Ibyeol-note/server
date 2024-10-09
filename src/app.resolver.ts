import { AppService } from './app.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query((returns) => Boolean)
  healthCheck(): Boolean {
    return true;
  }
}
