import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';

@Module({
  controllers: [GradesController],
  providers: [GradesService, PrismaService],
})
export class GradesModule {}
