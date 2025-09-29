import { Module } from '@nestjs/common';
import { EnrollmentsController } from './enrollment.controller';
import { EnrollmentsService } from './enrollment.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService, PrismaService],
})
export class EnrollmentsModule {}
