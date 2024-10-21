import { Timestamp } from '@arthurgubaidullin/timestamp';
import { DeviceId } from '@arthurgubaidullin/device-id';

export interface RegToken {
  readonly _tag: 'RegToken';
  readonly value: string;
  readonly deviceId: DeviceId;
  readonly timestamp: Timestamp;
}
