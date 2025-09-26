import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AssingmentsController } from './assingments.controller';
import { AssignmentsService } from './assignments.service';

@Module({
  controllers: [AssingmentsController],
  providers: [AssignmentsService, PrismaService],
})
export class AssignmentModel {}
