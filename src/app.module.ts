import { Module } from '@nestjs/common';
import { UsersModule } from './v1/modules/internal/users/users.module';
import { EmployeesModule } from './v1/modules/internal/employees/employees.module';
import { AddressesModule } from './v1/modules/internal/addresses/addresses.module';
import { ClientsModule } from './v1/modules/internal/clients/clients.module';
import { WarehousesModule } from './v1/modules/internal/warehouses/warehouses.module';
import { BillingsModule } from './v1/modules/internal/billings/billings.module';
import { ProductsModule } from './v1/modules/internal/products/products.module';
import { OrdersModule } from './v1/modules/internal/orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './env.config';
import { DatabaseModule } from './v1/modules/infrastructure/database/database.module';
import { AuthModule } from './v1/modules/infrastructure/auth/auth.module';
import config from './config';
import * as Joi from 'joi';

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
    AddressesModule,
    ClientsModule,
    WarehousesModule,
    BillingsModule,
    ProductsModule,
    OrdersModule,
    DatabaseModule,
    AuthModule,
  ],
})
export class AppModule {}
