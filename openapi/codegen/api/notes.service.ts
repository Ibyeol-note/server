import { Injectable } from '@nestjs/common';

@Injectable()
export class Notes {
    noteGet(
    ): Promise<Array<MyNoteResponse>> {
        // Business Logics
        return {
            // Return Data
        };
    }

    noteIdDelete(
        id: number
    ): Promise<void> {
        // Business Logics
        return {
            // Return Data
        };
    }

    noteIdGet(
        id: number
    ): Promise<MyNoteResponse> {
        // Business Logics
        return {
            // Return Data
        };
    }

    noteIdPut(
        id: number
        updateNoteDto: UpdateNoteDto
    ): Promise<MyNoteResponse> {
        // Business Logics
        return {
            // Return Data
        };
    }

    notePost(
        createNoteDto: CreateNoteDto
    ): Promise<MyNoteResponse> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
