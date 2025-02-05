import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY, MODEL_NAME, SYSTEM_INSTRUCTIONS } from "../constant";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({model: MODEL_NAME, systemInstruction: SYSTEM_INSTRUCTIONS()
});

export default model;