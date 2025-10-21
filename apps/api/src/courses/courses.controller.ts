import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Assignment as AssignmentModel} from '@repo/database';
import { AssignmentsService } from 'src/assignments/assignments.service';
import {CourseOut, CreateCourse, DeleteCourse, EditCourse} from '@repo/api/courses'

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService, private readonly assignmentsService: AssignmentsService) {}

  @Get()
  async findAll(): Promise<CourseOut[]> {
    return this.coursesService.findAllCourses({});
  }

  @Get(':id')
  async findCourseById(@Param('id') id: string): Promise<CourseOut> {
    return this.coursesService.findCourse({ id: id });
  }

  @Get(':id/assignments')
  async findAssignmentsByCourseID(@Param('id') id: string): Promise<AssignmentModel[]> {
    return this.assignmentsService.findAllAssignments({where: {courseId: id}})
  }

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourse): Promise<CourseOut> {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Put()
  async editCourse(@Body() editCourseDto: EditCourse): Promise<CourseOut> {
    return this.coursesService.updateCourse(editCourseDto);
  }

  @Delete()
  async removeCourse(@Body() deleteCourseDto: DeleteCourse): Promise<CourseOut> {
    return this.coursesService.deleteCourse(deleteCourseDto);
  }
}
