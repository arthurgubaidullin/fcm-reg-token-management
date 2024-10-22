import { DeviceId } from '@arthurgubaidullin/device-id-type';
import { RegToken } from '@arthurgubaidullin/reg-token';
import { Timestamp } from '@arthurgubaidullin/timestamp-type';
import { UserId } from '@arthurgubaidullin/user';

export interface SimplifiedUserRegTokenSet {
  readonly userId: UserId;
  readonly tokens: ReadonlyArray<{
    readonly deviceId: DeviceId;
    readonly value: RegToken;
  }>;
  readonly deletedAt: Timestamp;
  readonly updatedAt: Timestamp;
  readonly createdAt: Timestamp;
}

export interface UserRegTokenSet {
  readonly tokens: () => Iterator<RegToken, RegToken | undefined, RegToken>;
  readonly updateToken: (now: Timestamp, regToken: RegToken) => void;
  readonly toJSON: () => SimplifiedUserRegTokenSet;
}
