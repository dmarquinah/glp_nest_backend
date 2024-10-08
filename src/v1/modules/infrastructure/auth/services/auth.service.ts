import { Injectable } from '@nestjs/common';
import { User } from 'src/v1/modules/internal/users/entities/user.entity';
import { PayloadToken } from '../models/token.model';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/v1/modules/internal/users/services/users.service';
import { compare } from 'bcrypt';
import { RegisterDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async register(payload: RegisterDto) {
    return this.userService.createWithEmployee(payload);
  }

  async validateUserLogin(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isMatch = await compare(password, user.password);
      if (isMatch) return user;
      return null;
    }
    return null;
  }

  async generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
