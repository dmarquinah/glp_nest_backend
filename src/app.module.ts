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

@Module({
  imports: [
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
