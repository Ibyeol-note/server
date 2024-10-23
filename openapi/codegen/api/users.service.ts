import { Injectable } from '@nestjs/common';
import { model/createUserDto } from './model/createUserDto';
import { model/loginDto } from './model/loginDto';
import { model/loginResponse } from './model/loginResponse';
import { model/updateUserDto } from './model/updateUserDto';
import { model/user } from './model/user';

@Injectable()
export class UsersService {
    createUser(
        createUserDto: CreateUserDto
    ): Promise<User> {
        // Business Logics
        return {
            // Return Data
        };
    }

    deleteUser(
        userId: number
    ): Promise<void> {
        // Business Logics
        return {
            // Return Data
        };
    }

    getUserById(
        userId: number
    ): Promise<User> {
        // Business Logics
        return {
            // Return Data
        };
    }

    loginUser(
        loginDto: LoginDto
    ): Promise<LoginResponse> {
        // Business Logics
        return {
            // Return Data
        };
    }

    updateUser(
        userId: number
        updateUserDto: UpdateUserDto
    ): Promise<User> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
