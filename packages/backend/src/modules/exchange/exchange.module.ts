import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Importez HttpModule
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ExchangeService } from './exchange.service';
import { ExchangeController } from './exchange.controller';
import { JwtStrategy } from '../auth/jwt.strategy';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [
    HttpModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.secretJwtKey,
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ExchangeController],
  providers: [ExchangeService, JwtStrategy, ConfigService],
})
export class ExchangeModule {}
