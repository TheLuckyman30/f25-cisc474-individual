import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { PrismaService } from 'src/prisma.service';
import { AssignmentsService } from 'src/assignments/assignments.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, AssignmentsService, PrismaService],
})
export class CoursesModule {}
