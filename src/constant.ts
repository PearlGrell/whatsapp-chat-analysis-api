import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

export const PORT = 3001;
export const API_KEY = process.env.API_KEY || 'default_key';

export const MODEL_NAME = 'gemini-2.0-flash-exp';

export function SYSTEM_INSTRUCTIONS(): string{
    return fs.readFileSync(path.join(process.cwd(), "public","system_instructions.txt"), 'utf8');
}