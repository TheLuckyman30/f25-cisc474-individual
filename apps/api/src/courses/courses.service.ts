import { Injectable } from '@nestjs/common';
import { CourseOut, CreateCourse, DeleteCourse, EditCourse } from '@repo/api/courses';
import { Prisma } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAllCourses(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CourseWhereUniqueInput;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput;
  }): Promise<CourseOut[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.course.findMany({ skip, take, cursor, where, orderBy });
  }

  async findCourse(
    courseWhereUniqueInput: Prisma.CourseWhereUniqueInput,
  ): Promise<CourseOut | null> {
    return this.prisma.course.findUnique({ where: courseWhereUniqueInput });
  }
  
  async createCourse(createCourseDto: CreateCourse): Promise<CourseOut> {
    const newCourse = await this.prisma.course.create({data: createCourseDto});
    return {id: newCourse.id, ownerId: newCourse.ownerId, name: newCourse.name, description: newCourse.description}
  }

  async deleteCourse(deleteCourseDto: DeleteCourse): Promise<CourseOut> {
    const deletedCourse = await this.prisma.course.delete({where: deleteCourseDto});
    return {id: deletedCourse.id, ownerId: deletedCourse.ownerId, name: deletedCourse.name, description: deletedCourse.description}
  }

  async updateCourse(editCourseDto: EditCourse): Promise<CourseOut> {
    const editedCourse = await this.prisma.course.update({data: editCourseDto, where: {id: editCourseDto.id}});
    return {id: editedCourse.id, ownerId: editedCourse.ownerId, name: editedCourse.name, description: editedCourse.description}
  }
}
