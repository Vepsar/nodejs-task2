import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {} from '@nestjs/platform-fastify';
import { FastifyReply } from 'fastify';
import { WinstonModule } from 'nest-winston';
import logconfig from 'src/common/logconfig';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    return next.handle().pipe(
      tap(() => {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse<FastifyReply>();
        const logger = WinstonModule.createLogger(logconfig);
        logger.log({
          url: req.url,
          method: req.method,
          body: JSON.stringify(req.body),
          statusCode: res.statusCode,
          querry: req.querry,
        });
      }),
    );
  }
}
