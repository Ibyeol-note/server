import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class AIAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  content: string;

  @Column({ unique: true })
  noteId: number;

  @CreateDateColumn()
  createdAt: Date;
}
