import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseMovementsController } from './warehouse-movements.controller';
import { WarehouseMovementsService } from '../../warehouses/services/warehouse-movements.service';

describe('WarehouseMovementsController', () => {
  let controller: WarehouseMovementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseMovementsController],
      providers: [WarehouseMovementsService],
    }).compile();

    controller = module.get<WarehouseMovementsController>(
      WarehouseMovementsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
