import { IsOptional, IsString, IsNumber, IsEmail, IsDate, Matches, Min, Max, MinLength, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateRelationshipDecisionDto { 
    
    @IsRequired()
    
    
    
    
    
    
    
    
    
    @Expose()
    relationshipDecision: string;
}
export enum RelationshipDecisionEnum { 
    HOLD_ON = "HOLD_ON",
    LET_GO = "LET_GO",
}
