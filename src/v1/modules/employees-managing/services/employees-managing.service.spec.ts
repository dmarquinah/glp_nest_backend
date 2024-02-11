import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesManagingService } from './employees-managing.service';

describe('EmployeesManagingService', () => {
  let service: EmployeesManagingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeesManagingService],
    }).compile();

    service = module.get<EmployeesManagingService>(EmployeesManagingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
