import { Controller, Get, Param } from "@nestjs/common";
import { Submission as SubmissionModel } from "@repo/database";
import { SubmissionsService } from "./submissions.service";

@Controller('submissions')
export class SubmissionsController {
    constructor (private readonly submissionsService: SubmissionsService) {};

    @Get()
    async findAll(): Promise<SubmissionModel[]> {
        return this.submissionsService.findAllSubmissions({});
    }

    @Get(':id')
    async findSubmissionById(@Param('id') id: string): Promise<SubmissionModel> {
        return this.submissionsService.findSubmission({id: id})
    }
}