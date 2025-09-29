import { Controller, Get, Param } from "@nestjs/common";
import { Message as MessageModel } from "@repo/database";
import { MessagesService } from "./messages.service";

@Controller('messages')
export class MessagesController {
    constructor (private readonly messagesService: MessagesService) {};

    @Get()
    async findAll(): Promise<MessageModel[]> {
        return this.messagesService.findAllMessages({});
    }

    @Get(':id')
    async findMessageById(@Param('id') id: string): Promise<MessageModel> {
        return this.messagesService.findMessage({id: id})
    }
}