import { PartialType } from '@nestjs/swagger';
import { CreateWarehouseMovementDto } from './create-warehouse-movement.dto';

export class UpdateWarehouseMovementDto extends PartialType(
  CreateWarehouseMovementDto,
) {}
