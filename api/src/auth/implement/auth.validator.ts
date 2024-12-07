import { Injectable } from '@nestjs/common';
import { PrismaService } from 'api/src/prisma/prisma.service';

@Injectable()
export class AuthValidator {
  constructor(private readonly prismaService: PrismaService) {}
}
