import { Timestamp } from '@arthurgubaidullin/timestamp';

export interface RegToken {
  readonly _tag: 'RegToken';
  readonly value: string;
  readonly timestamp: Timestamp;
}
