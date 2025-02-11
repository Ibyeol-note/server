import { Expose } from 'class-transformer';

export class CreateNoteDto {
  @Expose()
  content: string;
}
