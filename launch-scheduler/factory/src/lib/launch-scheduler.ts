import { Options } from './options';

export const ONE_SECOND_IN_MS = 1 * 1000;

export class LaunchScheduler {
  private readonly options: Options;
  private readonly job: () => void;

  private lastRunAt: Date | null = null;

  constructor(job: () => void, options: Options) {
    this.job = job;
    this.options = options;
  }

  start() {
    const timer = setInterval(() => {
      if (!this.isItTime()) {
        return;
      }

      this.lastRunAt = new Date();

      this.job();
    }, ONE_SECOND_IN_MS);

    return () => {
      clearInterval(timer);
    };
  }

  private isItTime() {
    return (
      !this.lastRunAt ||
      this.lastRunAt.getTime() + this.options.intervalInMs < Date.now()
    );
  }
}
