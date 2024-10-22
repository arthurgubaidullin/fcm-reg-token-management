import { Messaging } from '@arthurgubaidullin/messaging';
import { DefaultRegToken } from '@arthurgubaidullin/default-reg-token';
import { DefaultDeviceId } from '@arthurgubaidullin/default-device-id';
import * as FirebaseMessaging from 'firebase/messaging';
import * as FirebaseInstallations from 'firebase/installations';
import { Timestamp } from '@arthurgubaidullin/timestamp';

export class FirebaseMessagingAdapter implements Messaging {
  private messaging: FirebaseMessaging.Messaging;
  private installations: FirebaseInstallations.Installations;

  constructor(
    messaging: FirebaseMessaging.Messaging,
    installations: FirebaseInstallations.Installations
  ) {
    this.messaging = messaging;
    this.installations = installations;
  }

  async getToken(now: Timestamp) {
    const regTokenAsString = FirebaseMessaging.getToken(this.messaging);
    const deviceIdAsString = FirebaseInstallations.getId(this.installations);

    return new DefaultRegToken(
      await regTokenAsString,
      new DefaultDeviceId(await deviceIdAsString),
      now
    );
  }
}
