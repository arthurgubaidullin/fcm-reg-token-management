import { RegTokenManager as _RegTokenManager } from '@arthurgubaidullin/reg-token-manager-type';
import { Timestamp } from '@arthurgubaidullin/timestamp-factory';
import { Messaging } from '@arthurgubaidullin/messaging-type';
import { RegTokenStorage } from '@arthurgubaidullin/reg-token-storage-type';
import { RegToken } from '@arthurgubaidullin/reg-token-type';

export class RegTokenManager implements _RegTokenManager {
  constructor(
    private readonly messaging: Messaging,
    private readonly regTokenStorage: RegTokenStorage
  ) {}

  async updateToken() {
    const token = await this.messaging.getToken(Timestamp.now());

    if (!token) {
      return;
    }

    await this.updateTokenInStorage(token);
  }

  private async updateTokenInStorage(token: RegToken) {
    await this.regTokenStorage.updateRegToken(token);
  }
}
