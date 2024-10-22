import { DeviceId } from '@arthurgubaidullin/device-id-type';

export interface Device {
  readonly deviceId: () => Promise<DeviceId>;
}
