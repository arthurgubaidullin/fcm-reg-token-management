import { BrowserProgram } from '@arthurgubaidullin/browser-program';

export class DefaultBrowserProgram implements BrowserProgram {
  start() {
    return () => this.stop();
  }

  private stop() {
    return;
  }
}
