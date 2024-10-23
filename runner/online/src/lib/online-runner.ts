import { NetworkStatus } from '@arthurgubaidullin/network-status-type';
import { Runner } from '@arthurgubaidullin/runner-type';
import { constVoid } from 'fp-ts/function';

export class OnlineRunner implements Runner {
  constructor(
    private readonly networkStatus: NetworkStatus,
    private readonly runner: Runner
  ) {}

  private stop = constVoid;

  private stopRunner() {
    this.stop();
    this.stop = constVoid;
  }

  private startRunner() {
    if (this.networkStatus.isOffLine) {
      return;
    }

    this.stopRunner();
    this.stop = this.runner.start();
  }

  start() {
    this.startRunner();

    return this.networkStatus.subscribe(() =>
      this.networkStatus.fold(
        () => this.startRunner(),
        () => this.stopRunner()
      )
    );
  }
}
