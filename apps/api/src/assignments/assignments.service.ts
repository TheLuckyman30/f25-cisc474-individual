import { Injectable } from '@nestjs/common';
import { Assignment, Prisma } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AssignmentsService {
  constructor(private prisma: PrismaService) {}

  async findAllAssignments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AssignmentWhereUniqueInput;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput;
  }): Promise<Assignment[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.assignment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findAssignment(
    assignmentWhereUniqueInput: Prisma.AssignmentWhereUniqueInput,
  ): Promise<Assignment | null> {
    return this.prisma.assignment.findUnique({
      where: assignmentWhereUniqueInput,
    });
  }
}
