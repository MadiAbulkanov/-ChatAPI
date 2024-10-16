
import { MessageDto } from "@/dto/message.dto";
import { MessageService } from "@/services/message.service";
import { plainToClass } from "class-transformer";
import { RequestHandler } from "express";

export class MessageController {

    private service: MessageService;

    constructor() {
        this.service = new MessageService();
    }

    getMessages: RequestHandler = (req, res):void => {
        const datetime = req.query.datetime as string;
        if (datetime) {
           try {
               const messages = this.service.getMessagesByDate(datetime);
               res.send(messages);
           } catch (error) {
               res.status(400).send({ "error": "The date entered is incorrect" });
               return;
           } 
        } else {
            const messages = this.service.getMessages();
            res.send(messages);
        };
    };
    
    createMessage: RequestHandler = (req, res):void => {
        const messageDto = plainToClass(MessageDto, req.body);
        if (!messageDto.author || !messageDto.message) {
            res.status(400).send({ "error": "Author and message must be present in the request" });
            return;
        };

        const message = this.service.createMessage(messageDto);
        res.send(message);
    };
}