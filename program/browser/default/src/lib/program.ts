import { BrowserProgram } from '@arthurgubaidullin/browser-program-type';
import { Timestamp } from '@arthurgubaidullin/default-timestamp';
import { Messaging } from '@arthurgubaidullin/messaging-type';
import { Permissions } from '@arthurgubaidullin/permissions-type';
import { RegTokenStorage } from '@arthurgubaidullin/reg-token-storage-type';

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export class DefaultBrowserProgram implements BrowserProgram {
  constructor(
    private readonly permissions: Permissions,
    private readonly messaging: Messaging,
    private readonly regTokenStorage: RegTokenStorage
  ) {}

  start() {
    const timer = setInterval(() => {
      this.updateToken();
    }, ONE_DAY_IN_MS);

    return () => {
      clearInterval(timer);
    };
  }

  private async updateToken() {
    const token = await this.messaging.getToken(Timestamp.now());

    if (!token) {
      return;
    }

    await this.regTokenStorage.updateRegToken(token);
  }
}
