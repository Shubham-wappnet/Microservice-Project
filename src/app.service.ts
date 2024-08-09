import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(getMatched: string, getConnected: string): string {
    return `Match service says ${getMatched}, Connect service says ${getConnected}`;
  }
}
