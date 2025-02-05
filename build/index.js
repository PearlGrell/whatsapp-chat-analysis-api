"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var chat_analysis_1 = require("./helpers/chat_analysis");
var constant_1 = require("./constant");
var error_middleware_1 = __importDefault(require("./middleware/error-middleware"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(error_middleware_1.default);
app.get('/', function (req, res) {
    res.send('Welcome to Chat Analysis API');
});
app.post('/api/analyse', chat_analysis_1.chatAnalysis);
app.listen(constant_1.PORT, function () {
    console.log('Server is running on http://localhost:3000');
});
exports.default = app;
//# sourceMappingURL=index.js.map