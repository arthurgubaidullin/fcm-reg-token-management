import { DeviceId } from '@arthurgubaidullin/device-id-type';

export class DefaultDeviceId implements DeviceId {
  readonly _tag = 'DeviceId' as const;
  readonly value: string;

  constructor(deviceIdAsString: string) {
    this.value = deviceIdAsString;
  }
}
