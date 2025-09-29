import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AnnouncemnetsController } from './annoucements.controller';
import { AnnoucementsService } from './annoucements.service';

@Module({
  controllers: [AnnouncemnetsController],
  providers: [AnnoucementsService, PrismaService],
})
export class AnnoucementsModule {}
