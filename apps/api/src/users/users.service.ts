import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.user.findMany({skip, take, cursor, where, orderBy});
  }
}
