import { DefaultRegToken } from '@arthurgubaidullin/default-reg-token';
import { Timestamp } from '@arthurgubaidullin/default-timestamp';
import { Messaging } from '@arthurgubaidullin/messaging';
import { DefaultDeviceId } from '@arthurgubaidullin/default-device-id';

export class FakeMessaging implements Messaging {
  getToken() {
    return new DefaultRegToken(
      'test',
      new DefaultDeviceId('test'),
      Timestamp.now()
    );
  }
}
