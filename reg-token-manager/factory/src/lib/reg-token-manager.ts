import { RegTokenManager as _RegTokenManager } from '@arthurgubaidullin/reg-token-manager-type';
import { Timestamp } from '@arthurgubaidullin/timestamp-factory';
import { Messaging } from '@arthurgubaidullin/messaging-type';
import { RegTokenStorage } from '@arthurgubaidullin/reg-token-storage-type';
import { RegToken } from '@arthurgubaidullin/reg-token-type';

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
const ONE_HOUR_IN_MS = 1 * 60 * 60 * 1000;

export class RegTokenManager implements _RegTokenManager {
  private lastUpdateAt: Date | null = null;

  constructor(
    private readonly messaging: Messaging,
    private readonly regTokenStorage: RegTokenStorage
  ) {}

  start() {
    const timer = setInterval(() => {
      this.updateIfItIsTime();
    }, ONE_HOUR_IN_MS);

    return () => {
      clearInterval(timer);
    };
  }

  private isItTime() {
    return (
      !this.lastUpdateAt ||
      this.lastUpdateAt.getTime() + ONE_DAY_IN_MS < Date.now()
    );
  }

  private async updateIfItIsTime() {
    if (!this.isItTime()) {
      return;
    }

    await this.updateToken();
  }

  private async updateToken() {
    const token = await this.messaging.getToken(Timestamp.now());

    if (!token) {
      return;
    }

    this.lastUpdateAt = new Date();

    await this.updateTokenInStorage(token);
  }

  private async updateTokenInStorage(token: RegToken) {
    await this.regTokenStorage.updateRegToken(token);
  }
}
