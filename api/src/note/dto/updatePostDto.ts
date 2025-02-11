import { Expose } from 'class-transformer';

export class UpdatePostDto {
  @Expose()
  content: string;
}
