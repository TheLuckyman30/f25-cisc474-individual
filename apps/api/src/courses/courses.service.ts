import { Injectable } from '@nestjs/common';
import { Course, Prisma } from '@repo/database';
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
  }): Promise<Course[]> {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.course.findMany({skip, take, cursor, where, orderBy});
  }
}
