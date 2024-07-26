import { Injectable } from '@nestjs/common';
import { CreateEmployeesManagingDto } from '../dto/create-employees-managing.dto';
import { UpdateEmployeesManagingDto } from '../dto/update-employees-managing.dto';

@Injectable()
export class EmployeesManagingService {
  create(createEmployeesManagingDto: CreateEmployeesManagingDto) {
    return 'This action adds a new employeesManaging';
  }

  findAll() {
    return `This action returns all employeesManaging`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeesManaging`;
  }

  update(id: number, updateEmployeesManagingDto: UpdateEmployeesManagingDto) {
    return `This action updates a #${id} employeesManaging`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeesManaging`;
  }
}
