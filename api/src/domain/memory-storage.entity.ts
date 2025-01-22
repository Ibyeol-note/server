import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MemoryStorage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;

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
