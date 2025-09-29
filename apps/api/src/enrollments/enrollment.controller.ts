import { Controller, Get, Param } from "@nestjs/common";
import { EnrollmentsService } from "./enrollment.service";
import { Enrollment as EnrollmentModel } from "@repo/database";

@Controller('enrollments')
export class EnrollmentsController {
    constructor(private readonly enrollmentsService: EnrollmentsService) {}

    @Get()
    async findAll(): Promise<EnrollmentModel[]> {
        return this.enrollmentsService.findAllEnrollments({});
    }

    @Get(':id')
    async findEnrollmentById(@Param('id') id: string): Promise<EnrollmentModel> {
        return this.enrollmentsService.findEnrollment({id: id})
    }
}