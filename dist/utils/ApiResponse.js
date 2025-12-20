"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    static success(res, options = {}) {
        const { data = null, message = 'Success', statusCode = 200, meta, } = options;
        const response = {
            success: true,
            message,
            data,
        };
        if (meta) {
            response.meta = meta;
        }
        return res.status(statusCode).json(response);
    }
    static error(res, options = {}) {
        const { error = 'Internal Server Error', message = 'An error occurred', statusCode = 500, details, } = options;
        const response = {
            success: false,
            error,
            message,
        };
        if (details && process.env.NODE_ENV !== 'production') {
            response.details = details;
        }
        return res.status(statusCode).json(response);
    }
}
exports.default = ApiResponse;
//# sourceMappingURL=ApiResponse.js.map