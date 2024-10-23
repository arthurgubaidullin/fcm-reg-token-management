import { LaunchScheduler } from './type';

export interface LaunchSchedulerOptions {
  readonly intervalInMs?: number;
}

export interface LaunchSchedulerFactory {
  readonly create: (
    job: () => void | Promise<void>,
    options?: LaunchSchedulerOptions
  ) => LaunchScheduler;
}
