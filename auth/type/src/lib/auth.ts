import { User } from '@arthurgubaidullin/user-type';

export interface Auth {
  readonly currentUser: User | null;
}
