import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesManagingController } from './employees-managing.controller';
import { EmployeesManagingService } from '../services/employees-managing.service';

describe('EmployeesManagingController', () => {
  let controller: EmployeesManagingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesManagingController],
      providers: [EmployeesManagingService],
    }).compile();

    controller = module.get<EmployeesManagingController>(
      EmployeesManagingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
