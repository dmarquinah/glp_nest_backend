import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseEmployeesService } from './warehouse-employees.service';

describe('WarehouseEmployeesService', () => {
  let service: WarehouseEmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseEmployeesService],
    }).compile();

    service = module.get<WarehouseEmployeesService>(WarehouseEmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
