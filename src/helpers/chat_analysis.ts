import type { NextFunction, Request, Response } from "express";
import analyse from "./analyse";

type Message = {
    "timestamp": string,
    "sender": string,
    "text": string
}


export const chatAnalysis = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { messages } = req.body;
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("No messages found in the request body");
        }
        const message = messages.map((message: Message) => `${message.timestamp} ${message.sender} ${message.text}`).join("\n");
        const analysisResult = await analyse(message);
        res.json(analysisResult);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: (error as Error).message });
    }
};
