import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

interface ExchangeRateApiResponse {
  rates: Record<string, number>;
}

@Injectable()
export class ExchangeService {
  constructor(private httpService: HttpService) {}

  getExchangeRate(from: string, to: string): Observable<number | null> {
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

    return this.httpService.get<ExchangeRateApiResponse>(url).pipe(
      map(response => {
        const rate = response.data.rates[to];
        return rate || null;
      })
    );
  }
}
