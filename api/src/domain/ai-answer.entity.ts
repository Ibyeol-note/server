import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class AIAnswer extends defaultEntity {
  @Column({ nullable: true })
  content: string;

  @Column({ unique: true })
  noteId: number;
}
