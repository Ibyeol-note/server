import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryStorage {
    userMemoryStorageGet(
    ): Promise<Array<GetMemoryStorage>> {
        // Business Logics
        return {
            // Return Data
        };
    }

    userMemoryStorageImageIdDelete(
        imageId: number
    ): Promise<void> {
        // Business Logics
        return {
            // Return Data
        };
    }

    userMemoryStorageImageIdGet(
        imageId: number
    ): Promise<GetMemoryStorage> {
        // Business Logics
        return {
            // Return Data
        };
    }

    userMemoryStoragePost(
        file: Blob
    ): Promise<UserMemoryStoragePost200Response> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
