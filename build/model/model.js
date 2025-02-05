"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generative_ai_1 = require("@google/generative-ai");
var constant_1 = require("../constant");
var genAI = new generative_ai_1.GoogleGenerativeAI(constant_1.API_KEY);
var model = genAI.getGenerativeModel({ model: constant_1.MODEL_NAME, systemInstruction: (0, constant_1.SYSTEM_INSTRUCTIONS)()
});
exports.default = model;
//# sourceMappingURL=model.js.map