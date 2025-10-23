import { Injectable } from '@nestjs/common';
import { Prisma } from '@repo/database';
import { PrismaService } from 'src/prisma.service';
import {UserOut} from '@repo/api/users'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<UserOut[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({ skip, take, cursor, where, orderBy });
  }

  async findUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<UserOut | null> {
    const user = await this.prisma.user.findUnique({ where: userWhereUniqueInput });
    return {id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email}
  }
}
