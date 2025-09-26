import { Controller, Get } from "@nestjs/common";
import { Announcement as AnnouncementModel } from "@repo/database";
import { AnnoucementsService } from "./annoucements.service";

@Controller('annoucements')
export class AnnouncemnetsController {
    constructor (private readonly annoucementsService: AnnoucementsService) {};

    @Get()
    async findAll(): Promise<AnnouncementModel[]> {
        return this.annoucementsService.findAllAnnoucements({});
    }
}