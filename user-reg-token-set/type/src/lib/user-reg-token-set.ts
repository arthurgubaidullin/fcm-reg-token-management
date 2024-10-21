import { DeviceId } from '@arthurgubaidullin/device-id';
import { RegToken } from '@arthurgubaidullin/reg-token';
import { Timestamp } from '@arthurgubaidullin/timestamp';
import { UserId } from '@arthurgubaidullin/user';

export interface SimplifiedUserRegTokenSet {
  readonly userId: UserId;
  readonly tokens: ReadonlyArray<{
    readonly device: DeviceId;
    readonly value: RegToken;
  }>;
  readonly deletedAt: Timestamp;
  readonly updatedAt: Timestamp;
  readonly createdAt: Timestamp;
}

export interface UserRegTokenSet {
  readonly userId: UserId;
  readonly tokens: Map<DeviceId, RegToken>;

  readonly toJSON: () => SimplifiedUserRegTokenSet;

  readonly deletedAt: Timestamp;
  readonly updatedAt: Timestamp;
  readonly createdAt: Timestamp;
}
