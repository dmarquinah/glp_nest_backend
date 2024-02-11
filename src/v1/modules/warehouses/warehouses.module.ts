import { Module } from '@nestjs/common';
import { WarehousesService } from './services/warehouses.service';
import { WarehousesController } from './controllers/warehouses.controller';

@Module({
  controllers: [WarehousesController],
  providers: [WarehousesService],
})
export class WarehousesModule {}
