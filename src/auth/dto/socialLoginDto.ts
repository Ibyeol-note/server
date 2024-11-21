import { IsString } from 'class-validator';

export class socialLoginDto {
  @IsString()
  accessToken: string;
}
