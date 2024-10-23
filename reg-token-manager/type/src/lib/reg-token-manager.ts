export type Stop = () => void;

export interface RegTokenManager {
  readonly start: () => Stop;
}
