import { Module } from '@nestjs/common';
import { UsersModule } from './v1/modules/users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
