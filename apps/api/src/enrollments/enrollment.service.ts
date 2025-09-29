import { Injectable } from "@nestjs/common";
import { Enrollment, Prisma } from "@repo/database";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class EnrollmentsService {
    constructor(private prisma: PrismaService) {}

    async findAllEnrollments(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EnrollmentWhereUniqueInput;
        where?: Prisma.EnrollmentWhereInput;
        orderBy?: Prisma.EnrollmentOrderByWithRelationInput;
      }): Promise<Enrollment[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.enrollment.findMany({ skip, take, cursor, where, orderBy });
    }

    async findEnrollment(enrollmentWhereUniqueInput: Prisma.EnrollmentWhereUniqueInput): Promise<Enrollment | null> {
        return this.prisma.enrollment.findUnique({where: enrollmentWhereUniqueInput})
    }
 }