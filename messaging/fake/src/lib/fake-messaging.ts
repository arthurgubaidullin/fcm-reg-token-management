import { DefaultDeviceId } from '@arthurgubaidullin/default-device-id';
import { DefaultRegToken } from '@arthurgubaidullin/default-reg-token';
import { Timestamp } from '@arthurgubaidullin/default-timestamp';
import { DefaultUserId } from '@arthurgubaidullin/default-user';
import { Messaging } from '@arthurgubaidullin/messaging';

export class FakeMessaging implements Messaging {
  async getToken() {
    return new DefaultRegToken(
      'test',
      new DefaultDeviceId('test'),
      new DefaultUserId('test'),
      Timestamp.now()
    );
  }
}
