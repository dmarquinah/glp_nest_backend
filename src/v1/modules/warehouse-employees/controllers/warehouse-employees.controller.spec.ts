import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseEmployeesController } from './warehouse-employees.controller';
import { WarehouseEmployeesService } from '../services/warehouse-employees.service';

describe('WarehouseEmployeesController', () => {
  let controller: WarehouseEmployeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseEmployeesController],
      providers: [WarehouseEmployeesService],
    }).compile();

    controller = module.get<WarehouseEmployeesController>(
      WarehouseEmployeesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
