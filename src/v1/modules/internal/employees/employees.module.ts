import { Module } from '@nestjs/common';
import { EmployeesService } from './services/employees.service';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesManagingController } from './controllers/employees-managing.controller';
import { EmployeesManagingService } from './services/employees-managing.service';
import { Employee } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeesController, EmployeesManagingController],
  providers: [EmployeesService, EmployeesManagingService],
  exports: [TypeOrmModule, EmployeesService],
})
export class EmployeesModule {}
