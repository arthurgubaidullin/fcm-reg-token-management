import { BrowserProgram } from '@arthurgubaidullin/browser-program-type';
import { Permissions } from '@arthurgubaidullin/permissions-type';
import { RegTokenManager } from '@arthurgubaidullin/reg-token-manager-type';
import { LaunchScheduler } from '@arthurgubaidullin/launch-scheduler-type';

export class DefaultBrowserProgram implements BrowserProgram {
  constructor(
    private readonly permissions: Permissions,
    private readonly regTokenManager: RegTokenManager,
    private readonly scheduler: LaunchScheduler
  ) {}

  start() {
    return this.scheduler.start();
  }
}
