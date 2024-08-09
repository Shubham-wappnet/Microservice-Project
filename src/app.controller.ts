import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SERVICE_A') private readonly clientA: ClientProxy,
    @Inject('SERVICE_B') private readonly clientB: ClientProxy,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const resultA = await firstValueFrom(this.clientA.send('getHello', ''));
    const resultB = await firstValueFrom(this.clientB.send('getHello', ''));
    return this.appService.getHello(resultA, resultB);
  }
}
