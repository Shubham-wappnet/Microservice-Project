import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchService {
  getMatched(): string {
    return 'Hello from match-request';
  }
}
