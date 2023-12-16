import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('total')
  getTotal(
    @Query('homem', ParseIntPipe) homem: number,
    @Query('mulher', ParseIntPipe) mulher: number,
    @Query('crianca', ParseIntPipe) crianca: number,
    ): Array<object> {
    return this.appService.calculateInputFood(homem, mulher, crianca)
  }
}
