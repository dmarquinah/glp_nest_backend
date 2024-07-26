import { Injectable } from '@nestjs/common';
import { CreateWarehouseMovementDto } from '../dto/create-warehouse-movement.dto';
import { UpdateWarehouseMovementDto } from '../dto/update-warehouse-movement.dto';

@Injectable()
export class WarehouseMovementsService {
  create(createWarehouseMovementDto: CreateWarehouseMovementDto) {
    return 'This action adds a new warehouseMovement';
  }

  findAll() {
    return `This action returns all warehouseMovements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} warehouseMovement`;
  }

  update(id: number, updateWarehouseMovementDto: UpdateWarehouseMovementDto) {
    return `This action updates a #${id} warehouseMovement`;
  }

  remove(id: number) {
    return `This action removes a #${id} warehouseMovement`;
  }
}
