import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../models/roles.model';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Obtaining list of roles from decorator in route
    const roles: Role[] = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user as PayloadToken; // Raw data defined from JWT
    const isAuthRole = roles.some((role) => role === user.role);
    if (!isAuthRole) {
      throw new UnauthorizedException(
        'Unsufficient privileges to access this endpoint',
      );
    }

    return isAuthRole;
  }
}
