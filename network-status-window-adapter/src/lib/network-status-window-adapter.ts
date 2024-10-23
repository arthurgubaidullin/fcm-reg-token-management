import { NetworkStatus } from '@arthurgubaidullin/network-status-type';

export class NetworkStatusWindowAdapter implements NetworkStatus {
  constructor(
    private readonly window: EventTarget & { navigator: { onLine: boolean } }
  ) {}

  subscribe(stateChanged: () => void): () => void {
    const handler = () => stateChanged();

    this.window.addEventListener('online', handler);
    this.window.addEventListener('offline', handler);

    return () => {
      this.window.removeEventListener('online', handler);
      this.window.removeEventListener('offline', handler);
    };
  }

  fold<T>(onOnLine: () => T, onOffLine: () => T): T {
    if (this.isOnLine) {
      return onOnLine();
    } else {
      return onOffLine();
    }
  }

  get isOnLine() {
    return this.window.navigator.onLine;
  }

  get isOffLine() {
    return !this.isOnLine;
  }
}
