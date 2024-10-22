import { User, UserId } from '@arthurgubaidullin/user-type';

export class DefaultUser implements User {
  readonly _tag = 'User' as const;
  readonly id: UserId;

  constructor(id: UserId) {
    this.id = id;
  }
}
