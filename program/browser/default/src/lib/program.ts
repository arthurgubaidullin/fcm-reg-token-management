import { BrowserProgram } from '@arthurgubaidullin/browser-program-type';
import { Permissions } from '@arthurgubaidullin/permissions-type';
import { RegTokenManager } from '@arthurgubaidullin/reg-token-manager-type';

export class DefaultBrowserProgram implements BrowserProgram {
  constructor(
    private readonly permissions: Permissions,
    private readonly regTokenManager: RegTokenManager
  ) {}

  start() {
    const stop = this.regTokenManager.start();

    return () => {
      stop();
    };
  }
}
