import { Controller, Get } from "@nestjs/common";
import { Submission as SubmissionModel } from "@repo/database";
import { SubmissionsService } from "./submissions.service,";

@Controller('submissions')
export class SubmissionsController {
    constructor (private readonly submissionsService: SubmissionsService) {};

    @Get()
    async findAll(): Promise<SubmissionModel[]> {
        return this.submissionsService.findAllServices({});
    }
}