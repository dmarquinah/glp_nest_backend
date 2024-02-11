import { Module } from '@nestjs/common';
import { WarehouseMovementsService } from './services/warehouse-movements.service';
import { WarehouseMovementsController } from './controllers/warehouse-movements.controller';

@Module({
  controllers: [WarehouseMovementsController],
  providers: [WarehouseMovementsService],
})
export class WarehouseMovementsModule {}
