import { Entity, Column } from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class PostView extends defaultEntity {
  @Column()
  postId: string;

  @Column()
  userId: number;
}
