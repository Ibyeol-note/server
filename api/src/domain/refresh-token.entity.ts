import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class RefreshToken {
  // TODO. redis로 대체
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unique: true })
  token: string;

  @Column()
  deviceInfo: string;

  @Column()
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column()
  userId: number;
}
