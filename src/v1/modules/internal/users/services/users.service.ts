import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(payload: CreateUserDto) {
    const newUser = this.userRepo.create(payload);
    const salt = parseInt(process.env.SALT || '10');
    const hashedPassword = await hash(newUser.password, salt);
    newUser.password = hashedPassword;
    return await this.userRepo.save(newUser);
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepo.findOneBy({ email });
    if (!user) {
      throw new NotFoundException(`User #${email} not found.`);
    }

    return user;
  }

  async update(id: number, payload: UpdateUserDto) {
    const user = await this.findOne(id);
    this.userRepo.merge(user, payload);
    return await this.userRepo.save(user);
  }

  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}
