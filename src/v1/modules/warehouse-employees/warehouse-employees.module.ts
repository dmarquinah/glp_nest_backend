import { Module } from '@nestjs/common';
import { WarehouseEmployeesService } from './services/warehouse-employees.service';
import { WarehouseEmployeesController } from './controllers/warehouse-employees.controller';

@Module({
  controllers: [WarehouseEmployeesController],
  providers: [WarehouseEmployeesService],
})
export class WarehouseEmployeesModule {}
