import { DefaultRegToken } from '@arthurgubaidullin/default-reg-token';
import { Device } from '@arthurgubaidullin/device';
import { Messaging } from '@arthurgubaidullin/messaging';
import { Timestamp } from '@arthurgubaidullin/timestamp';
import * as FirebaseMessaging from 'firebase/messaging';

export class FirebaseMessagingAdapter implements Messaging {
  private messaging: FirebaseMessaging.Messaging;
  private device: Device;

  constructor(messaging: FirebaseMessaging.Messaging, device: Device) {
    this.messaging = messaging;
    this.device = device;
  }

  async getToken(now: Timestamp) {
    const regTokenAsString = FirebaseMessaging.getToken(this.messaging);
    const deviceId = this.device.deviceId();

    return new DefaultRegToken(await regTokenAsString, await deviceId, now);
  }
}
