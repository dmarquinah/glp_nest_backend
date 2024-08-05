import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateEmployeeDto } from 'src/v1/modules/internal/employees/dto/employee.dto';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'The email of any given user.' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;

  @Type(() => CreateEmployeeDto)
  @ValidateNested()
  readonly employee: CreateEmployeeDto;
}
