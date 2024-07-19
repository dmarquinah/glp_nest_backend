import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeesManagingService } from '../services/employees-managing.service';
import { CreateEmployeesManagingDto } from '../dto/create-employees-managing.dto';
import { UpdateEmployeesManagingDto } from '../dto/update-employees-managing.dto';

@Controller('employees-managing')
export class EmployeesManagingController {
  constructor(
    private readonly employeesManagingService: EmployeesManagingService,
  ) {}

  @Post()
  create(@Body() createEmployeesManagingDto: CreateEmployeesManagingDto) {
    return this.employeesManagingService.create(createEmployeesManagingDto);
  }

  @Get()
  findAll() {
    return this.employeesManagingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesManagingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeesManagingDto: UpdateEmployeesManagingDto,
  ) {
    return this.employeesManagingService.update(
      +id,
      updateEmployeesManagingDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesManagingService.remove(+id);
  }
}
