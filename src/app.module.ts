import { Module } from '@nestjs/common';
import { UsersModule } from './v1/modules/users/users.module';
import { EmployeesModule } from './v1/modules/employees/employees.module';
import { EmployeesManagingModule } from './v1/modules/employees-managing/employees-managing.module';
import { AddressesModule } from './v1/modules/addresses/addresses.module';
import { ClientsModule } from './v1/modules/clients/clients.module';
import { WarehousesModule } from './v1/modules/warehouses/warehouses.module';
import { WarehouseEmployeesModule } from './v1/modules/warehouse-employees/warehouse-employees.module';
import { BillingsModule } from './v1/modules/billings/billings.module';
import { ProductsModule } from './v1/modules/products/products.module';
import { WarehouseMovementsModule } from './v1/modules/warehouse-movements/warehouse-movements.module';
import { OrdersModule } from './v1/modules/orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './env.config';
import config from './config';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        MYSQL_DB: Joi.string().required(),
        MYSQL_USER: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_HOST: Joi.string().required(),
      }),
    }),
    UsersModule,
    EmployeesModule,
    EmployeesManagingModule,
    AddressesModule,
    ClientsModule,
    WarehousesModule,
    WarehouseEmployeesModule,
    BillingsModule,
    ProductsModule,
    WarehouseMovementsModule,
    OrdersModule,
  ],
})
export class AppModule {}
