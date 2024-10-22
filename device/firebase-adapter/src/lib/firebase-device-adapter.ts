import { DefaultDeviceId } from '@arthurgubaidullin/default-device-id';
import { Device } from '@arthurgubaidullin/device';
import * as FirebaseInstallations from 'firebase/installations';

export class FirebaseDeviceAdapter implements Device {
  private installations: FirebaseInstallations.Installations;

  constructor(installations: FirebaseInstallations.Installations) {
    this.installations = installations;
  }

  async deviceId() {
    const deviceIdAsString = await FirebaseInstallations.getId(
      this.installations
    );

    return new DefaultDeviceId(deviceIdAsString);
  }
}
