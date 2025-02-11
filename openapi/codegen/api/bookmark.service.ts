import { Injectable } from '@nestjs/common';

@Injectable()
export class Bookmark {
    userBookmarkGet(
    ): Promise<Array<BookmarkResponse>> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
