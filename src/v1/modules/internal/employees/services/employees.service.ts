import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dto/employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  ) {}

  async create(payload: CreateEmployeeDto) {
    const newEmployee = this.employeeRepo.create(payload);
    return await this.employeeRepo.save(newEmployee);
  }

  async findAll() {
    return await this.employeeRepo.find();
  }

  async findOne(id: number) {
    const employee = await this.employeeRepo.findOne({ where: { id } });
    if (!employee) {
      throw new NotFoundException(`Employee ${id} not found.`);
    }
    return employee;
  }

  async update(id: number, payload: UpdateEmployeeDto) {
    const employee = await this.findOne(id);
    this.employeeRepo.merge(employee, payload);
    return await this.employeeRepo.save(employee);
  }

  async remove(id: number) {
    return await this.employeeRepo.delete(id);
  }
}
