import { UserId } from '@arthurgubaidullin/user';
import { DeviceId } from '@arthurgubaidullin/device-id';
import { RegToken } from '@arthurgubaidullin/reg-token';

export interface RegTokenStorage {
  readonly getRegToken: (
    userId: UserId,
    deviceId: DeviceId
  ) => Promise<RegToken | null>;

  readonly updateRegToken: (regToken: RegToken) => Promise<void>;
}
