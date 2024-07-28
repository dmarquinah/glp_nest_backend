import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { User } from 'src/v1/modules/internal/users/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from '../dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  login(@Req() req: Request) {
    // req.user is setted up in the Guard
    return this.authService.generateJWT(req.user as User);
  }

  @Post('register')
  @HttpCode(HttpStatus.ACCEPTED)
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
