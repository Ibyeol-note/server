import { Injectable } from '@nestjs/common';

@Injectable()
export class UserReader {
  constructor() {}

  // async findById(id: number) {
  //   return await this.prismaService.user.findFirst({ where: { id } });
  // }
}
