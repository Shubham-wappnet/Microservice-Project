import { Injectable } from '@nestjs/common';

@Injectable()
export class ConnectService {
  getConnected(): string {
    return 'Hello from connect-request';
  }
}
