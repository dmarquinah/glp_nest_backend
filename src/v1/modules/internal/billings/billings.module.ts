import { Module } from '@nestjs/common';
import { BillingsService } from './services/billings.service';
import { BillingsController } from './controllers/billings.controller';

@Module({
  controllers: [BillingsController],
  providers: [BillingsService],
})
export class BillingsModule {}
