"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = error;
function error(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}
//# sourceMappingURL=error-middleware.js.map