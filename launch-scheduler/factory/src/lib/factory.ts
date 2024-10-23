import { LaunchSchedulerOptions } from '@arthurgubaidullin/launch-scheduler-type';
import { LaunchScheduler } from './launch-scheduler';
import { Options } from './options';

export class LaunchSchedulerFactory {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static create(job: () => void, options: LaunchSchedulerOptions) {
    const _options = new Options(options);

    return new LaunchScheduler(job, _options);
  }
}
