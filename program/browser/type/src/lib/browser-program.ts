export type Stop = () => void;

export interface BrowserProgram {
  readonly start: () => Stop;
}
