import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WarehouseEmployeesService } from '../services/warehouse-employees.service';
import { CreateWarehouseEmployeeDto } from '../dto/create-warehouse-employee.dto';
import { UpdateWarehouseEmployeeDto } from '../dto/update-warehouse-employee.dto';

@Controller('warehouse-employees')
export class WarehouseEmployeesController {
  constructor(
    private readonly warehouseEmployeesService: WarehouseEmployeesService,
  ) {}

  @Post()
  create(@Body() createWarehouseEmployeeDto: CreateWarehouseEmployeeDto) {
    return this.warehouseEmployeesService.create(createWarehouseEmployeeDto);
  }

  @Get()
  findAll() {
    return this.warehouseEmployeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehouseEmployeesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWarehouseEmployeeDto: UpdateWarehouseEmployeeDto,
  ) {
    return this.warehouseEmployeesService.update(
      +id,
      updateWarehouseEmployeeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warehouseEmployeesService.remove(+id);
  }
}
