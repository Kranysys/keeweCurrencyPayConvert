import { Controller, Post, Body, Get, Logger, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/process')
  async processPayment(@Body() paymentData: any): Promise<any> {
    Logger.log('payment data:', paymentData);
    return await this.paymentService.processPayment(paymentData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/history')
  async getPaymentHistory() {
    return await this.paymentService.getPaymentHistory();
  }
}
