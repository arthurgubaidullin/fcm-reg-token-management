type Stop = () => void;

export interface Runner {
  readonly start: () => Stop;
}
