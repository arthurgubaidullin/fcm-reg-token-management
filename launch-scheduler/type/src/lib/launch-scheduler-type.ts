export type Stop = () => void;

export interface LaunchScheduler {
  readonly start: () => Stop;
}
