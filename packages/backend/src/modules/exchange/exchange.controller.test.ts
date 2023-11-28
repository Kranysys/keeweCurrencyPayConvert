import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';

describe('ExchangeController', () => {
  let exchangeController: ExchangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule], // Import HttpModule
      controllers: [ExchangeController],
      providers: [ExchangeService], // Provide ExchangeService
    }).compile();

    exchangeController = module.get<ExchangeController>(ExchangeController);
  });

  describe('root', () => {
    it('convert 123 EUR to USD', async () => {
      const result = await exchangeController.convertCurrency(
        'EUR',
        'USD',
        123
      );
      expect(result).toBeTruthy();
    });
  });
});
