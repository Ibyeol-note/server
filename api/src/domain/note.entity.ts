import { Entity, Column } from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class Note extends defaultEntity {
  @Column({ nullable: true })
  content: string;

  @Column({ default: false })
  fixed: boolean;

  @Column()
  themeId: number;

  @Column()
  userId: number;
}
