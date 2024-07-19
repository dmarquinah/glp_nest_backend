import { Module } from '@nestjs/common';
import { EmployeesService } from './services/employees.service';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesManagingController } from './controllers/employees-managing.controller';
import { EmployeesManagingService } from './services/employees-managing.service';

@Module({
  controllers: [EmployeesController, EmployeesManagingController],
  providers: [EmployeesService, EmployeesManagingService],
})
export class EmployeesModule {}
