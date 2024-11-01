import { Injectable } from '@nestjs/common';

@Injectable()
export class Users {
    userPost(
        createUserDto: CreateUserDto
    ): Promise<User> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
