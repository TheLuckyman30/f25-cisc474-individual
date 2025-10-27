import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private reflector: Reflector){};

    canActivate(context: ExecutionContext): boolean {
        const [req] = context.getArgs();
        const { user } = req
        const currentUserPerimissions: string[] = user.permissions ?? [];
        const requiredPermissions: string[] = this.reflector.get('permissions', context.getHandler()) ?? [];
        const hasRequiredPermissions = requiredPermissions.every((perm) => currentUserPerimissions.includes(perm));

        if (requiredPermissions.length === 0 || hasRequiredPermissions) {
            return true;
        }
        throw new UnauthorizedException('You are not allowed access to this resource')
    }
}