import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column({ nullable: true })
  instagram: string;

  @Column()
  relationshipDecision: string;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  deletedAt: Date;

  @Column({ unique: true })
  userId: number;
}
