import { User } from '@arthurgubaidullin/user';

export interface Auth {
  readonly currentUser: User | null;
}
