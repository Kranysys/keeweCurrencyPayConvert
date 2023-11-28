import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from './config/config.module';
import { StatusModule } from './status/status.module';
import { ExchangeModule } from './exchange/exchange.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'keewepayment',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false, // change to migrate
    }),
    ConfigModule,
    StatusModule,
    ExchangeModule,
    PaymentModule,
  ],
})
export class APIModule {}
