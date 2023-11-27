import { Test, TestingModule } from '@nestjs/testing';

import { ConfigService } from '~/modules/config/config.service';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';

describe('exchange Controller', () => {
  let exchangeController: ExchangeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExchangeController],
      providers: [ConfigService, ExchangeService],
    }).compile();

    exchangeController = app.get<ExchangeController>(ExchangeController);
  });

  describe('root', () => {
    it('should return a nice status world', () => {
      expect(exchangeController.convertCurrency).toBe(
        'Hello world from Nest running on localhost:4000!'
      );
    });
  });
});
