import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Response } from '../models/response.model';
import { map, Observable } from 'rxjs';

export class ResponseTransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> | Promise<Observable<Response<T>>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        message: 'OK',
        statusCode: context.switchToHttp().getResponse().statusCode || 200,
      })),
    );
  }
}
