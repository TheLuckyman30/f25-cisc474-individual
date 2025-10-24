import { Controller, Get, Param, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtUser } from 'src/auth/jwt.strategy';
import { UserOut } from '@repo/api/users';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  async getMe(@CurrentUser() auth: JwtUser): Promise<UserOut> {
    if (!auth || !auth.userId) {
      throw new UnauthorizedException()
    }
    return this.usersService.findUser({id: auth.userId});
  }

  @Get()
  async findAll(): Promise<UserOut[]> {
    return this.usersService.findAllUsers({});
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<UserOut> {
    return this.usersService.findUser({ id: id });
  }
}
