import { read } from 'graceful-fs';
import { Injectable, Logger, CallHandler } from '@nestjs/common';
import { NestInterceptor, ExecutionContext } from '@nestjs/common/interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators'
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next$: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const now = Date.now();
        // console.log(context.getType());
        if (req) {
            const method = req.method;
            const url = req.url;

            return next$.handle().pipe(
                tap(() =>
                    Logger.log(`${method} ${url} ${Date.now() - now}ms`, context.getClass().name)
                )
            );
        } else {
            const ctx: any = GqlExecutionContext.create(context);
            const resolverName = ctx.construtorRef;
            const info = ctx.getInfo();
            return next$.handle().pipe(
                tap(() =>
                    Logger.log(`${info.parentType} "${info.fieldName}" ${Date.now() - now}ms`, ctx.getClass().name)
                )
            );
        }
    }
}