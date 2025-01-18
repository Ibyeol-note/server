import { Injectable } from '@nestjs/common';

@Injectable()
export class User {
    userRelationshipDecisionPut(
        updateRelationshipDecisionDto: UpdateRelationshipDecisionDto
    ): Promise<RelationshipDecisionResponse> {
        // Business Logics
        return {
            // Return Data
        };
    }

}
