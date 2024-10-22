import { BrowserProgram } from '@arthurgubaidullin/browser-program';
import { Auth } from '@arthurgubaidullin/auth';
import { Messaging } from '@arthurgubaidullin/messaging';

export class DefaultBrowserProgram implements BrowserProgram {
  constructor(
    private readonly auth: Auth,
    private readonly messaging: Messaging
  ) {}

  start() {
    return () => this.stop();
  }

  private stop() {
    return;
  }
}
