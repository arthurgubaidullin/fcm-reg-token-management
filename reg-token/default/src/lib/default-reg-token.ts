import { RegToken } from '@arthurgubaidullin/reg-token';
import { Timestamp } from '@arthurgubaidullin/timestamp';

export class DefaultRegToken implements RegToken {
  readonly _tag = 'RegToken';
  readonly value: string;
  readonly timestamp: Timestamp;

  constructor(regTokenAsString: string, timestamp: Timestamp) {
    this.value = regTokenAsString;
    this.timestamp = timestamp;
  }
}
