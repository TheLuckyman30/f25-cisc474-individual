import { Controller, Get, Param } from '@nestjs/common';
import { Grade as GradeModel } from '@repo/database';
import { GradesService } from './grades.service';

@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Get()
  async findAll(): Promise<GradeModel[]> {
    return this.gradesService.findAllGrades({});
  }

  @Get(':id')
  async findGradeById(@Param('id') id: string): Promise<GradeModel> {
    return this.gradesService.findGrade({ id: id });
  }
}
