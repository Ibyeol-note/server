import { Expose } from 'class-transformer';

export class UpdateNoteDto {
  @Expose()
  content: string;
}
