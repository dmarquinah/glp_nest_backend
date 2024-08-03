import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The name of a given Employee.' })
  readonly name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The phone number of an Employee.' })
  readonly phoneNumber: string;
}

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
