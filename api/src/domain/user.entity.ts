import { Entity, Column } from 'typeorm';
import { defaultEntity } from './base.entity';

@Entity()
export class User extends defaultEntity {
  @Column({ nullable: true, unique: true })
  email: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  birthdayType: string;

  @Column()
  loginMethod: string;

  @Column()
  socialLoginId: string;
}
