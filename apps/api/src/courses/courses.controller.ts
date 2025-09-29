import { Controller, Get, Param } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { Course as CourseModel } from "@repo/database";

@Controller('courses')
export class CoursesController {
    constructor (private readonly coursesService: CoursesService) {};

    @Get()
    async findAll(): Promise<CourseModel[]> {
        return this.coursesService.findAllCourses({});
    }

    @Get(':id')
    async findCourseById(@Param('id') id: string): Promise<CourseModel> {
        return this.coursesService.findCourse({id: id})
    }
}