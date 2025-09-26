import { Injectable } from '@nestjs/common';
import { Announcement, Prisma } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnnoucementsService {
  constructor(private prisma: PrismaService) {}

  async findAllAnnoucements(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput
  }): Promise<Announcement[]> {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.announcement.findMany({skip, take, cursor, where, orderBy});
  }
}
