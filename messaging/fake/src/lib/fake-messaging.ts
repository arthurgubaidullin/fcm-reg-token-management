import { DefaultRegToken } from '@arthurgubaidullin/default-reg-token';
import { Timestamp } from '@arthurgubaidullin/default-timestamp';
import { Messaging } from '@arthurgubaidullin/messaging';

export class FakeMessaging implements Messaging {
  getToken() {
    return new DefaultRegToken('test', Timestamp.now());
  }
}
