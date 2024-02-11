import { Module } from '@nestjs/common';
import { EmployeesManagingService } from './services/employees-managing.service';
import { EmployeesManagingController } from './controllers/employees-managing.controller';

@Module({
  controllers: [EmployeesManagingController],
  providers: [EmployeesManagingService],
})
export class EmployeesManagingModule {}
