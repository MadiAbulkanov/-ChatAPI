import { MessageDto } from "@/dto/message.dto";
import { IMessage } from "@/interfaces/message.interface";
import { randomUUID } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const filePath = path.join(__dirname, '../messages/messages.json');

export class MessageService {
    private messages: IMessage[] = [];

    constructor() {
        this.init();
    }

    init = (): void => {
        try {
            const fileContents = readFileSync(filePath, 'utf8');
            this.messages = JSON.parse(fileContents.toString());
        } catch (error) {
            this.messages = [];
        }
    };

    save = ():void => {
        writeFileSync(filePath, JSON.stringify(this.messages, null, 2));
    };

    getMessages = (): IMessage[] => {
        const sortMessages = this.messages.sort((a, b) => new Date(a.datatime).getTime() - new Date(b.datatime).getTime());
        return sortMessages.slice(0, 30);
    };

    getMessagesByDate = (datetime: string): IMessage[] => {
        const date = new Date(datetime.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$2/$1/$3"));
        if (isNaN(date.getTime())) {
            throw new Error('The date entered is incorrect');
        }
        return this.messages.filter(message => new Date(message.datatime) > date);
    };

    createMessage = (messageDto: MessageDto): IMessage => {
        const datatime = new Date().toISOString();
       
        const message = {
            id: randomUUID(),
            datatime: datatime,
            ...messageDto,
        };
        this.messages.push(message);
        this.save();
        return message;
    };
}