import { Controller, Get } from "@nestjs/common";
import { Assignment as AssignmentModel } from "@repo/database";
import { AssignmentsService } from "./assignments.service";

@Controller('assignments')
export class AssingmentsController {
    constructor (private readonly assignmentsService: AssignmentsService) {};

    @Get()
    async findAll(): Promise<AssignmentModel[]> {
        return this.assignmentsService.findAllAssignments({});
    }
}