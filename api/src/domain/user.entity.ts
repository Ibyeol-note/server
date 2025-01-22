import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @CreateDateColumn()
  registrationAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  deletedAt: Date;
}
