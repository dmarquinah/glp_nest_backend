import { PartialType } from '@nestjs/swagger';
import { CreateWarehouseEmployeeDto } from './create-warehouse-employee.dto';

export class UpdateWarehouseEmployeeDto extends PartialType(
  CreateWarehouseEmployeeDto,
) {}
