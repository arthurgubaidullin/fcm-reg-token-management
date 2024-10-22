import { BrowserProgram } from '@arthurgubaidullin/browser-program';
import { Auth } from '@arthurgubaidullin/auth';
import { Messaging } from '@arthurgubaidullin/messaging';
import { RegTokenStorage } from '@arthurgubaidullin/reg-token-storage';

export class DefaultBrowserProgram implements BrowserProgram {
  constructor(
    private readonly auth: Auth,
    private readonly messaging: Messaging,
    private readonly regTokenStorage: RegTokenStorage
  ) {}

  start() {
    return () => this.stop();
  }

  private stop() {
    return;
  }
}
