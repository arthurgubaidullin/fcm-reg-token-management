import { DeviceId } from '@arthurgubaidullin/device-id';
import { RegToken } from '@arthurgubaidullin/reg-token';
import { Timestamp } from '@arthurgubaidullin/timestamp';

export class DefaultRegToken implements RegToken {
  readonly _tag = 'RegToken';
  readonly value: string;
  readonly timestamp: Timestamp;
  readonly deviceId: DeviceId;

  constructor(
    regTokenAsString: string,
    deviceId: DeviceId,
    timestamp: Timestamp
  ) {
    this.value = regTokenAsString;
    this.timestamp = timestamp;
    this.deviceId = deviceId;
  }
}
