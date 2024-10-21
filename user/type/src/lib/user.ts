import { UserId } from './user-id';

export interface User {
  readonly _tag: 'User';
  readonly id: UserId;
}
