import { Timestamp } from '@arthurgubaidullin/timestamp-type';
import { DeviceId } from '@arthurgubaidullin/device-id-type';
import { UserId } from '@arthurgubaidullin/user-type';

export interface SimplifiedRegToken {
  readonly token: string;
  readonly userId: string;
  readonly deviceId: string;
  readonly timestamp: Timestamp;
}

export interface RegToken {
  readonly _tag: 'RegToken';
  readonly value: string;
  readonly userId: UserId;
  readonly deviceId: DeviceId;
  readonly timestamp: Timestamp;

  readonly toJSON: () => SimplifiedRegToken;
}
