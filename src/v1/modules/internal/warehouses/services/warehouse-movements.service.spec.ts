import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseMovementsService } from './warehouse-movements.service';

describe('WarehouseMovementsService', () => {
  let service: WarehouseMovementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseMovementsService],
    }).compile();

    service = module.get<WarehouseMovementsService>(WarehouseMovementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
