import { DefaultUser, DefaultUserId } from '@arthurgubaidullin/default-user';
import { User } from '@arthurgubaidullin/user';
import { Auth } from '@arthurgubaidullin/auth-type';

export class InMemoryAuth implements Auth {
  get currentUser(): User | null {
    return new DefaultUser(new DefaultUserId('test'));
  }
}
