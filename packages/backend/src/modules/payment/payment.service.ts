import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../../entities/transaction.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>
  ) {}

  async processPayment(paymentData: any): Promise<Transaction> {
    Logger.log('paymentData:', paymentData);
    const transaction = new Transaction();
    transaction.date = new Date();
    transaction.amount = paymentData.amount;
    transaction.currency = paymentData.currency;
    transaction.status = 'Processed';

    return await this.transactionRepository.save(transaction);
  }

  async getPaymentHistory(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }
}
