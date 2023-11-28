import { Controller, Post, Body, Get, Logger } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/process')
  async processPayment(@Body() paymentData: any): Promise<any> {
    Logger.log('payment data:', paymentData);
    return await this.paymentService.processPayment(paymentData);
  }

  @Get('/history')
  async getPaymentHistory() {
    return await this.paymentService.getPaymentHistory();
  }
}
