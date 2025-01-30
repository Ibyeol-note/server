import { Entity, Column } from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class MemoryStorage extends defaultEntity {
  @Column()
  imageUrl: string;

  @Column()
  userId: number;
}
