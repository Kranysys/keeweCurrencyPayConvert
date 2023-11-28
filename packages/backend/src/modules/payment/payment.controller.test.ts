import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { Repository } from 'typeorm';
import { Transaction } from '../../entities/transaction.entity';

describe('PaymentController', () => {
  let paymentController: PaymentController;
  let mockTransactionRepository: Partial<Repository<Transaction>>;

  beforeEach(async () => {
    mockTransactionRepository = {
      find: jest.fn().mockResolvedValue([]),
      save: jest.fn().mockImplementation(entity => Promise.resolve(entity)),
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PaymentController],
      providers: [
        PaymentService,
        {
          provide: 'TransactionRepository',
          useValue: mockTransactionRepository,
        },
      ],
    }).compile();

    paymentController = module.get<PaymentController>(PaymentController);
  });

  describe('root', () => {
    it('process payment', async () => {
      const result = await paymentController.processPayment({
        currency: 'EUR',
        amount: '123',
      });
      expect(result).toBeDefined();
    });

    it('get history', async () => {
      const result = await paymentController.getPaymentHistory();
      expect(result).toBeTruthy();
    });
  });
});
