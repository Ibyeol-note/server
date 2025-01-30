import { Entity, Column } from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class Post extends defaultEntity {
  @Column({ nullable: true })
  content: string;

  @Column()
  userId: number;
}
