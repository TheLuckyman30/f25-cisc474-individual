import { Injectable } from '@nestjs/common';
import { Prisma, Submission } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SubmissionsService {
  constructor(private prisma: PrismaService) {}

  async findAllServices(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubmissionWhereUniqueInput;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput;
  }): Promise<Submission[]> {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.submission.findMany({skip, take, cursor, where, orderBy});
  }
}
