import { MessageController } from "@/controllers/message.controller";
import { Route } from "@/interfaces/IRoute.interface";
import { Router } from "express";

export class MessageRoute implements Route {
    public path = '/messages';
    public router = Router();

    private controller: MessageController;

    constructor() {
        this.controller = new MessageController();
        this.init();
    }

    private init () {
        this.router.get('/', this.controller.getMessages);
        this.router.post('/', this.controller.createMessage);
    }
};