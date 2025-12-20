import { Response } from 'express';
import { ErrorOptions, SuccessOptions } from '../types/ApiResponse.types';
declare class ApiResponse {
    static success<T>(res: Response, options?: SuccessOptions<T>): Response;
    static error(res: Response, options?: ErrorOptions): Response;
}
export default ApiResponse;
//# sourceMappingURL=ApiResponse.d.ts.map