import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ExchangeService } from './exchange.service';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Controller('exchange')
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/convert')
  convertCurrency(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('amount') amount: number
  ) {
    return this.exchangeService.getExchangeRate(from, to).pipe(
      map(rate => {
        if (!rate) {
          throw new HttpException(
            'Invalid currency pair',
            HttpStatus.BAD_REQUEST
          );
        }
        return { convertedAmount: amount * rate };
      }),
      catchError(err =>
        throwError(
          () => new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR)
        )
      )
    );
  }
}
