import { Controller, Get } from '@nestjs/common';
import { ConnectService } from './connect.service';

@Controller()
export class ConnectController {
  constructor(private readonly connectService: ConnectService) {}
  @Get()
  getHello(): string {
    return this.connectService.getConnected();
  }
}
