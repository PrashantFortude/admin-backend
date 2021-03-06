import { ExecutionContext } from '@nestjs/common/interfaces';
import { ExceptionFilter, Catch, HttpException, ArgumentsHost, Logger } from "@nestjs/common";

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {

        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        // const status = exception.getStatus();

        const errorResponse = {
            // code: status,
            timestamp: new Date().toLocaleDateString(),
            method: request.method,
            path: request.url,
            message: exception.message || null
        }

        Logger.error(`${request.method} ${request.url}`, JSON.stringify(errorResponse), 'ExceptionFilter')

        response.status(status).json(errorResponse)

    }
}