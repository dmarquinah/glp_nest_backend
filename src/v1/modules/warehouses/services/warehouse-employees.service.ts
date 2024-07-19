import { Injectable } from '@nestjs/common';
import { CreateWarehouseEmployeeDto } from '../../warehouses/dto/create-warehouse-employee.dto';
import { UpdateWarehouseEmployeeDto } from '../../warehouses/dto/update-warehouse-employee.dto';

@Injectable()
export class WarehouseEmployeesService {
  create(createWarehouseEmployeeDto: CreateWarehouseEmployeeDto) {
    return 'This action adds a new warehouseEmployee';
  }

  findAll() {
    return `This action returns all warehouseEmployees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} warehouseEmployee`;
  }

  update(id: number, updateWarehouseEmployeeDto: UpdateWarehouseEmployeeDto) {
    return `This action updates a #${id} warehouseEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} warehouseEmployee`;
  }
}
