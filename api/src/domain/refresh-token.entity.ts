import { Entity, Column } from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class RefreshToken extends defaultEntity {
  // TODO. redis로 대체
  @Column({ unique: true })
  token: string;

  @Column()
  deviceInfo: string;

  @Column()
  expiresAt: Date;

  @Column()
  userId: number;
}
