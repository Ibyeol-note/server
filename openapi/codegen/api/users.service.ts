import { Injectable } from '@nestjs/common';

@Injectable()
export class Users {
    userPost(
        createUserDto: CreateUserDto
    ): Promise<void> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
