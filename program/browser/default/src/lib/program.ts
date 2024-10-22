import { BrowserProgram } from '@arthurgubaidullin/browser-program';
import { Auth } from '@arthurgubaidullin/auth';

export class DefaultBrowserProgram implements BrowserProgram {
  constructor(private readonly auth: Auth) {}

  start() {
    return () => this.stop();
  }

  private stop() {
    return;
  }
}
