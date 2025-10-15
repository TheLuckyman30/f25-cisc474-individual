import { Injectable } from '@nestjs/common';
import { CourseOut } from '@repo/api/courses';
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
}
