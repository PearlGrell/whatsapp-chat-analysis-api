"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODEL_NAME = exports.API_KEY = exports.PORT = void 0;
exports.SYSTEM_INSTRUCTIONS = SYSTEM_INSTRUCTIONS;
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
exports.PORT = 3001;
exports.API_KEY = process.env.API_KEY || 'default_key';
exports.MODEL_NAME = 'gemini-2.0-flash-exp';
function SYSTEM_INSTRUCTIONS() {
    return fs_1.default.readFileSync('public/system_instructions.txt', 'utf8');
}
//# sourceMappingURL=constant.js.map