import { PartialType } from '@nestjs/swagger';
import { CreateEmployeesManagingDto } from './create-employees-managing.dto';

export class UpdateEmployeesManagingDto extends PartialType(
  CreateEmployeesManagingDto,
) {}
