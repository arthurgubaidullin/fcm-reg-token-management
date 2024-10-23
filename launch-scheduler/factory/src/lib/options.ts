import { LaunchSchedulerOptions } from '@arthurgubaidullin/launch-scheduler-type';

export const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export class Options implements LaunchSchedulerOptions {
  private _intervalInMs: number | undefined;

  constructor(options?: { intervalInMs?: number }) {
    this._intervalInMs = options?.intervalInMs;
  }

  get intervalInMs() {
    return this._intervalInMs ?? ONE_DAY_IN_MS;
  }
}
