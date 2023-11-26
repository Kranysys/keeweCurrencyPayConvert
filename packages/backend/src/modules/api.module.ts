import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { StatusModule } from './status/status.module';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [ConfigModule, StatusModule, ExchangeModule],
})
export class APIModule {}
