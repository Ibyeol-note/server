import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Clipping {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  deletedAt: Date;

  @Column()
  postId: string;

  @Column()
  userId: number;
}
