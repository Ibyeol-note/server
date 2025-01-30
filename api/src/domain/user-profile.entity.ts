import { Entity, Column } from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class UserProfile extends defaultEntity {
  @Column()
  nickname: string;

  @Column({ nullable: true })
  instagram: string;

  @Column()
  relationshipDecision: string;

  @Column({ unique: true })
  userId: number;
}
