export type Stop = () => void;

export interface Program {
  readonly start: () => Stop;
}
