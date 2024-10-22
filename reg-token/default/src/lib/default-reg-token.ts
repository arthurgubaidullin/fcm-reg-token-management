import { DeviceId } from '@arthurgubaidullin/device-id';
import { DefaultDeviceId } from '@arthurgubaidullin/default-device-id';
import { DefaultUserId } from '@arthurgubaidullin/default-user';
import { RegToken, SimplifiedRegToken } from '@arthurgubaidullin/reg-token';
import { Timestamp } from '@arthurgubaidullin/timestamp';
import { UserId } from '@arthurgubaidullin/user';

export class DefaultRegToken implements RegToken {
  readonly _tag = 'RegToken';
  readonly value: string;
  readonly userId: UserId;
  readonly timestamp: Timestamp;
  readonly deviceId: DeviceId;

  constructor(
    regTokenAsString: string,
    deviceId: DeviceId,
    userId: UserId,
    timestamp: Timestamp
  ) {
    this.value = regTokenAsString;
    this.timestamp = timestamp;
    this.deviceId = deviceId;
    this.userId = userId;
  }

  static fromJSON(json: SimplifiedRegToken): DefaultRegToken {
    return new DefaultRegToken(
      json.token,
      new DefaultDeviceId(json.deviceId),
      new DefaultUserId(json.userId),
      json.timestamp
    );
  }

  toJSON() {
    return {
      token: this.value,
      userId: this.userId.value,
      timestamp: this.timestamp,
      deviceId: this.deviceId.value,
    };
  }
}
