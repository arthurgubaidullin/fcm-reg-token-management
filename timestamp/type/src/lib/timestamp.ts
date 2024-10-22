export interface TimestampFactory {
  readonly now: () => Timestamp;
}

export interface SimplifiedTimestamp {
  readonly seconds: number;
  readonly nanoseconds: number;
}

export interface Timestamp {
  readonly seconds: number;
  readonly nanoseconds: number;

  readonly toDate: () => Date;
  readonly toMillis: () => number;
  readonly isEqual: (other: Timestamp) => boolean;
  readonly toString: () => string;
  readonly valueOf: () => string;
  readonly toJSON: () => SimplifiedTimestamp;
}
