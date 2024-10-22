import { DefaultRegToken } from '@arthurgubaidullin/default-reg-token';
import { Device } from '@arthurgubaidullin/device';
import { Messaging } from '@arthurgubaidullin/messaging';
import { Auth } from '@arthurgubaidullin/auth-type';
import { Timestamp } from '@arthurgubaidullin/timestamp-type';
import * as FirebaseMessaging from 'firebase/messaging';

export class FirebaseMessagingAdapter implements Messaging {
  private messaging: FirebaseMessaging.Messaging;
  private device: Device;
  private auth: Auth;

  constructor(
    messaging: FirebaseMessaging.Messaging,
    device: Device,
    auth: Auth
  ) {
    this.messaging = messaging;
    this.device = device;
    this.auth = auth;
  }

  async getToken(now: Timestamp) {
    const regTokenAsString = FirebaseMessaging.getToken(this.messaging);
    const deviceId = this.device.deviceId();
    const user = this.auth.currentUser;

    if (!user) {
      return null;
    }

    return new DefaultRegToken(
      await regTokenAsString,
      await deviceId,
      user.id,
      now
    );
  }
}
