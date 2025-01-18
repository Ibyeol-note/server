import { Injectable } from '@nestjs/common';

@Injectable()
export class Note {
    noteNoteIdAiAnswerGet(
        noteId: string
    ): Promise<AIAnswerResponse> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
