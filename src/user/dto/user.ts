import { IsNumber, IsOptional } from 'class-validator';

export class User {
  @IsNumber()
  @IsOptional()
  id?: number;

  username?: string;

  email?: string;
  /** 유저의 현재 상태 */
  status?: string;
  /** 유저의 역할 */
  role?: string;
  /** 유저 생성 날짜 */
  createdAt?: string;
  /** 유저 정보 수정 날짜 */
  updatedAt?: string;
}
export type StatusEnum = 'active' | 'inactive' | 'suspended';
export type RoleEnum = 'admin' | 'user' | 'guest';
