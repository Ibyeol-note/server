import {
  IsOptional,
  IsString,
  IsNumber,
  IsEmail,
  IsDate,
  Matches,
  Min,
  Max,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { PostResponseUser } from './postResponseUser';

export class PostResponse {
  @Expose()
  id: string;

  @Expose()
  content: string;

  @Expose()
  view: number;

  @IsDate()
  @Expose()
  createdAt: string;

  @IsDate()
  @Expose()
  updatedAt: string;

  @Expose()
  isDeleted: boolean;

  @IsDate()
  @Expose()
  deletedAt: string;

  @Expose()
  RelationshipDecision: string;

  @Expose()
  user: PostResponseUser;
}
export enum RelationshipDecisionEnum {
  HOLD_ON = 'HOLD_ON',
  LET_GO = 'LET_GO',
}
