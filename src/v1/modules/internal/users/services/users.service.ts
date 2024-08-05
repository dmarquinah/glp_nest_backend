import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { Role } from 'src/v1/modules/infrastructure/auth/models/roles.model';
import { RegisterDto } from 'src/v1/modules/infrastructure/auth/dto/auth.dto';
import { EmployeesService } from '../../employees/services/employees.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly employeesService: EmployeesService,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async buildNewUserModel(payload: CreateUserDto) {
    const newUser = this.userRepo.create(payload);
    const salt = parseInt(process.env.SALT || '10');
    const hashedPassword = await hash(newUser.password, salt);
    newUser.password = hashedPassword;
    newUser.role = Role.COLLABORATOR; // New user is always default role
    return newUser;
  }

  async create(payload: CreateUserDto) {
    const newUser = await this.buildNewUserModel(payload);
    return await this.userRepo.save(newUser);
  }

  async createWithEmployee(payload: RegisterDto) {
    const newUser = await this.buildNewUserModel(payload);

    if (payload.employee) {
      const newEmployee = await this.employeesService.create(payload.employee);
      newUser.employee = newEmployee;
    }
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
