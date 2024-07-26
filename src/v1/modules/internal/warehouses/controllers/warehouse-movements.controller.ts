import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WarehouseMovementsService } from '../services/warehouse-movements.service';
import { CreateWarehouseMovementDto } from '../dto/create-warehouse-movement.dto';
import { UpdateWarehouseMovementDto } from '../dto/update-warehouse-movement.dto';

@Controller('warehouse-movements')
export class WarehouseMovementsController {
  constructor(
    private readonly warehouseMovementsService: WarehouseMovementsService,
  ) {}

  @Post()
  create(@Body() createWarehouseMovementDto: CreateWarehouseMovementDto) {
    return this.warehouseMovementsService.create(createWarehouseMovementDto);
  }

  @Get()
  findAll() {
    return this.warehouseMovementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehouseMovementsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWarehouseMovementDto: UpdateWarehouseMovementDto,
  ) {
    return this.warehouseMovementsService.update(
      +id,
      updateWarehouseMovementDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warehouseMovementsService.remove(+id);
  }
}
