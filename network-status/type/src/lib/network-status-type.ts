type Unsubscribe = () => void;

export interface NetworkStatus {
  readonly isOnLine: boolean;
  readonly isOffLine: boolean;

  readonly subscribe: (stateChanged: () => void) => Unsubscribe;

  readonly fold: <T>(onOnLine: () => T, onOffLine: () => T) => T;
}
