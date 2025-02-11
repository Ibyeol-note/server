import { Expose } from 'class-transformer';

export class PostResponseUser {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  image: string;

  @Expose()
  isBookmark: boolean;
}
