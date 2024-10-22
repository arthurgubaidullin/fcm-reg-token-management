import { DeviceId } from '@arthurgubaidullin/device-id';

export interface Device {
  readonly deviceId: () => Promise<DeviceId>;
}
