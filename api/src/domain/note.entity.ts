import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  content: string;

  @Column({ default: false })
  fixed: boolean;

  @Column()
  themeId: number;

  @Column()
  userId: number;
}
