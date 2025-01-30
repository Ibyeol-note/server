import { Entity, Column } from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class Theme extends defaultEntity {
  @Column()
  title: string;

  @Column()
  noteId: number;
}
