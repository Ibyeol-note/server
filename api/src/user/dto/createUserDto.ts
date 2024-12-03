export class CreateUserDto {
  username: string;

  email: string;

  password: string;

  role: string;
}
export type RoleEnum = 'admin' | 'user' | 'guest';
