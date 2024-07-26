import { Module } from '@nestjs/common';
import { WarehousesService } from './services/warehouses.service';
import { WarehousesController } from './controllers/warehouses.controller';
import { WarehouseEmployeesController } from './controllers/warehouse-employees.controller';
import { WarehouseEmployeesService } from './services/warehouse-employees.service';

@Module({
  controllers: [WarehousesController, WarehouseEmployeesController],
  providers: [WarehousesService, WarehouseEmployeesService],
})
export class WarehousesModule {}
