import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUser(CreateUserDto: CreateUserDto): Promise<User> {
    // Business Logics
    return {
      // Return Data
    };
  }
  deleteUser(userId: number): Promise<> {
    // Business Logics
    return {
      // Return Data
    };
  }
  getUserById(userId: number): Promise<User> {
    // Business Logics
    return {
      // Return Data
    };
  }
  loginUser(LoginDto: LoginDto): Promise<LoginResponse> {
    // Business Logics
    return {
      // Return Data
    };
  }
  updateUser(userId: numberUpdateUserDto: UpdateUserDto): Promise<User> {
    // Business Logics
    return {
      // Return Data
    };
  }
}