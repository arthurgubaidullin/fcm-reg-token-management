import { UserId } from '@arthurgubaidullin/user';

export class DefaultUserId implements UserId {
  readonly _tag = 'UserId' as const;
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
}
