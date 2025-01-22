import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  deletedAt: Date;

  @Column()
  userId: number;
}
