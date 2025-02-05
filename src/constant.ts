import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const API_KEY = process.env.API_KEY || 'default_key';

export const MODEL_NAME = 'gemini-2.0-flash-exp';

export function SYSTEM_INSTRUCTIONS(): string{
    return fs.readFileSync('src/system_instructions.txt', 'utf8');
}